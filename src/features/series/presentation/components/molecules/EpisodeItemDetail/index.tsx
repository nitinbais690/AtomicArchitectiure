import React from "react";
import { Text, View } from "react-native";
import { Episode } from "@series/domain/entities/episode";
import { episodeItemDetailStyles } from "./style";
import Constants from "@constants/Constants";
import TextView from "@series/components/atoms/Text/";
import componentsStyles from "@core/theme/components-style";

export default function EpisodeItemDetail(episode: Episode) {
  return (
    <View style={episodeItemDetailStyles.container}>
      {EpisodeNo(episode)}
      {EpisodeCaption(episode)}
    </View>
  );
}

function EpisodeNo(episode: Episode) {
  return (
    <View style={episodeItemDetailStyles.episodeTitleSection}>
      <View style={episodeItemDetailStyles.episodeTitle}>
        <TextView
          value={getEpisodeNumber(episode)}
          style={componentsStyles.subHeaderText}
        />
      </View>
      <TextView
        value={episode.title}
        style={componentsStyles.subHeaderText}
        numberOfLines={Constants.twoLinesText}
        testID={Constants.TEST_ID_EPISODE_ITEM_TITLE}
      />
    </View>
  );
}

function EpisodeCaption(episode: Episode) {
  return (
    <View style={episodeItemDetailStyles.episodeDesc}>
      <TextView
        // numberOfLines={Constants.numberOfLinesForText}
        value={getEpisodeItemCaption(episode)}
        style={componentsStyles.bodySmallText}
      />
    </View>
  );
}

function getEpisodeNumber(episode: Episode): string {
  return `${Constants.episode} ${episode.episodeNo}`;
}

function getDuration(episode: Episode) {
  //Duration data been as seconds so we converting to min by using divide by 60
  return `${episode.duration / Constants.minutes}${Constants.minutesSymbol}`;
}

function getAirDate(episode: Episode) {
  return `${Constants.originallyAired} ${parseAiredDate(episode.airedDate)}`;
}

function getEpisodeItemCaption(episode: Episode) {
  return `${getDuration(episode)} - ${getAirDate(episode)}`;
}

function parseAiredDate(date: string): string {
  let airedDate = new Date(date);
  let month = Constants.monthNames[airedDate.getMonth()];
  let year = airedDate.getFullYear();
  let day = airedDate.getDate().toString();
  day = day.length > 1 ? day : "0" + day;
  return month + " " + day + ", " + year;
}
