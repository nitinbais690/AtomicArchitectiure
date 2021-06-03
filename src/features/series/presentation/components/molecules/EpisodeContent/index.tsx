import React from "react";
import { Episode } from "@series/domain/entities/episode";
import { EpisodeDetailsProps } from "@series/components/organisms/EpisodeDetailsView";
import { Image, View } from "react-native";
import TextView from "@series/components/atoms/Text";
import componentsStyles from "@core/theme/components-style";
import { seriesContentStyles } from "./style";
import Constants from "@constants/Constants";

export default function EpisodeContent(props: EpisodeDetailsProps) {
  return (
    <View style={seriesContentStyles.seriesContent}>
      {SeriesVendorLogo()}
      {SeriesTitle(props)}
      {EpisodeName(props)}
      {EpisodeCaption(props)}
      {EpisodeDescription(props)}
    </View>
  );
}

function SeriesVendorLogo() {
  return (
    <Image
      style={seriesContentStyles.amcImage}
      source={require("assets/amc_logo.png")}
    />
  )
}

function SeriesTitle(props: EpisodeDetailsProps) {
  return (
    <TextView
      value={props.selectedSeason.seriesTitle}
      style={componentsStyles.subHeaderText}
    />
  );
}

function EpisodeName(props: EpisodeDetailsProps) {
  return (
    <View style={seriesContentStyles.headerContent}>
      <TextView
        value={getEpisodeName(props.selectedEpisode)}
        style={componentsStyles.headerText}
        numberOfLines={Constants.oneLineText}
        testID={Constants.TEST_ID_CURRENT_EPISODE_TITLE}
      />
    </View>
  );
}

function EpisodeCaption(props: EpisodeDetailsProps) {
  return (
    <View style={seriesContentStyles.bodyContent}>
      <TextView
        value={getEpisodeCaptionName(props.selectedEpisode)}
        style={componentsStyles.bodySmallText}
      />
    </View>
  );
}

function EpisodeDescription(props: EpisodeDetailsProps) {
  return (
    <TextView
      value={props.selectedEpisode.shortDescription}
      style={componentsStyles.subHeaderText}
    />
  );
}

function getEpisodeName(episode: Episode) {
  return `S${episode.seasonNo} E${episode.episodeNo}: ${episode.title}`;
}

function getEpisodeCaptionName(episode: Episode) {
  return `${episode.year} ${Constants.hyphonSymbol} ${getGenresText(episode.genres)} ${Constants.hyphonSymbol} ${Constants.generesMA} ${Constants.hyphonSymbol
    } ${episode.duration / Constants.minutes}${Constants.generesM}`;
}

function getGenresText(genres: Array<string>): string {
  // Return empty string if genres empty
  if (genres) {
    return genres.join(Constants.commaSymbol)
  } else {
    return ""
  }
}
