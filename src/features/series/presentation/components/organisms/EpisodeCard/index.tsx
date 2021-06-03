import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import EpisodeItemDetail from "@series/components/molecules/EpisodeItemDetail";
import EpisodeThumbnail from "@series/components/molecules/EpisodeThumbnail";
import { episodeCardStyles } from "@series/components/organisms/EpisodeCard/style";
import { Episode } from "@series/domain/entities/episode";

export default function EpisodeCard(props: EpisodeItemProps) {
  const [isItemFocused, setIsItemFocused] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);

  let onClickEpisode = () => {
    setIsItemSelected(true);
    props.onSelectEpisode(props.episode);
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onClickEpisode}
      onFocus={() => setIsItemFocused(true)}
      onBlur={() => setIsItemFocused(false)}
      testID={props.testID}>
      {EpisodeCardContent(props, isItemFocused, isItemSelected)}
    </TouchableOpacity>
  );
}

function EpisodeCardContent(props: EpisodeItemProps, isItemFocused: boolean, isItemSelected: boolean) {
  return (
    <View
      style={
        getFocusStyle(isItemFocused, isItemSelected)
      }>
      {Thumbnail(props)}
      <EpisodeItemDetail {...props.episode} />
    </View>
  );
}

function Thumbnail(props: EpisodeItemProps) {
  return (
    <EpisodeThumbnail
      credits={props.episode.creditPoints.toString()}
      thumbnailImage={props.episode.image}
    />
  );
}

//func to apply different styles for focused item and selected item
function getFocusStyle(isItemFocused: Boolean, isItemSelected: Boolean): Array<any> {
  if (isItemFocused) {
    return isItemSelected ? [episodeCardStyles.card, episodeCardStyles.borderView] : [episodeCardStyles.card]
  } else {
    return [episodeCardStyles.unfocusedCard]
  }
}

/**
 * EpisodeItemProps definition of EpisodeItem view properties
 */
export interface EpisodeItemProps {

    // Episode to render for episode item view
    episode: Episode,
    onSelectEpisode: Function,
    testID?: string
}