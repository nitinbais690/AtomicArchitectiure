import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import EpisodeCard from "@series/components/organisms/EpisodeCard";
import { episodeListViewStyles } from "@series/components/organisms/EpisodeListView/style";
import Constants from "@constants/Constants";
import { Failure } from "@core/api/failure";
import { Episode } from "@series/domain/entities/episode";

export default function EpisodeListView(props: EpisodesProps) {
  const renderEpisodeItem: ListRenderItem<Episode> = ({ item }) => (
    <EpisodeCard
      episode={item}
      onSelectEpisode={props.onSelectEpisode}
      testID={Constants.TEST_ID_EPISODE_ITEM}
    />
  );

  return EpisodesList(props, renderEpisodeItem);
}

function EpisodesList(
  props: EpisodesProps,
  renderEpisodeItem: ListRenderItem<Episode>
) {
  if (props.episodes && props.episodes instanceof Array) {
    return (
      <View style={episodeListViewStyles.season}>
        <FlatList
          nestedScrollEnabled={true}
          data={props.episodes}
          renderItem={renderEpisodeItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
        />
      </View>
    );
  } else {
    return EmptyView();
  }

  function EmptyView() {
    return <View></View>;
  }
}

export interface EpisodesProps {
  episodes: Array<Episode> | Failure;
  onSelectEpisode: Function;
}
