import React, { useState } from "react";
import { View } from "react-native";

import { Failure } from "@core/api/failure";
import { Season } from "@series/domain/entities/season";
import { useFetchEpisode } from "@series/hooks/series-hooks";
import EpisodeListView, {
  EpisodesProps,
} from "@series/components/organisms/EpisodeListView";
import SeasonsView, {
  SeasonsProps,
} from "@series/components/organisms/SeasonsView";
import { Episode } from "@series/domain/entities/episode";

import { seasonsAndEpisodesStyles } from "./style";

export default function SeasonsAndEpisodesView(props: SeasonsProps) {
  // Default page number set as 1 because we don't have UI capability to integrate the pagination
  const pageNumber = 1;

  const [selectedSeasonId, setSelectedSeasonId] = useState("");
  const episodes = useFetchEpisode(
    props.seriesId,
    getSelectedSeason(selectedSeasonId, props.seasons),
    pageNumber
  );

  let onEpisodeItemPress = (episode: Episode) => {
    props.onSelectEpisode(
      episode,
      getSelectedSeason(selectedSeasonId, props.seasons)
    );
  };

  let seasonListProps: SeasonsProps = {
    seasons: props.seasons,
    seriesId: props.seriesId,
    onSelectSeason: setSelectedSeasonId,
    onSelectEpisode: onEpisodeItemPress,
    selectedSeasonId: selectedSeasonId,
  };

  let episodeListProps: EpisodesProps = {
    onSelectEpisode: onEpisodeItemPress,
    episodes: episodes,
  };

  return (
    <View style={seasonsAndEpisodesStyles.seasonsAndEpisodeBody}>
      {Seasons(seasonListProps)}
      {Episodes(episodeListProps)}
    </View>
  );
}

function Seasons(seasonListProps: SeasonsProps) {
  return (
    <View style={seasonsAndEpisodesStyles.seasonsSection}>
      <SeasonsView {...seasonListProps} />
    </View>
  );
}

function Episodes(episodesProps: EpisodesProps) {
  return (
    <View style={seasonsAndEpisodesStyles.episodesSection}>
      <EpisodeListView {...episodesProps} />
    </View>
  );
}

function getSelectedSeason(id: string, seasons: Array<Season> | Failure) {
  if (seasons && seasons instanceof Array) {
    return seasons.find((item) => item.id == id);
  } else null;
}
