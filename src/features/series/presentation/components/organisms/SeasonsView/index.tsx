import React from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import SeasonItem from "@series/components/atoms/SeasonItem";
import { seasonListViewStyles } from "./style";
import { Failure } from "@core/api/failure";
import { Season } from "@series/domain/entities/season";
import TextView from "@series/components/atoms/Text";
import componentsStyles from "@core/theme/components-style";
import Constants from "@constants/Constants";

export default function SeasonsView(props: SeasonsProps) {
  const renderItem: ListRenderItem<Season> = ({ item }) => {
    return SeasonItemView(item, props);
  };

  return SeasonsList(props, renderItem);
}

function SeasonsList(props: SeasonsProps, renderItem: ListRenderItem<Season>) {
  if (props.seasons && props.seasons instanceof Array) {
    return (
      <View style={seasonListViewStyles.season}>
        <FlatList
          nestedScrollEnabled={true}
          data={props.seasons}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
        />
      </View>
    );
  } else {
    return EmptyView();
  }
}

// function to show placeholder text when no seasons available
function EmptyView() {
  return (
    <View>
      <TextView
        value={Constants.noSeasons}
        style={componentsStyles.subHeaderText}
      />
    </View>
  );
}

function SeasonItemView(season: Season, props: SeasonsProps) {
  return (
    <SeasonItem
      id={season.id}
      seasonNumber={season.number}
      onSeasonSelected={(selectedId: String) => {
        if (props.onSelectSeason) props.onSelectSeason(selectedId);
      }}
      selectedSeasonId={props.selectedSeasonId}
      testID={Constants.TEST_ID_SEASON_ITEM}
    />
  );
}

export interface SeasonsProps {
  seasons: Array<Season> | Failure;
  seriesId: string;
  onSelectEpisode: Function;
  onSelectSeason?: Function;
  selectedSeasonId: String;
}
