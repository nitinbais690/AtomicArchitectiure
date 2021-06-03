import React from "react";
import { View } from "react-native";
import CreditsView from "@series/components/atoms/CreditsView";
import ThumbnailView from "@series/components/atoms/ThumbnailView";
import { episodeThumbnailStyles } from "./style";

export default function EpisodeThumbnail(props: EpisodeThumbnailProps) {
  return (
    <View style={episodeThumbnailStyles.episodeCardImage}>
      {Thumbnail(props)}
      {CreditView(props)}
    </View>
  );
}

function Thumbnail(props: EpisodeThumbnailProps) {
  return (
    <ThumbnailView thumbnailImage={props.thumbnailImage} />
  );
}

function CreditView(props: EpisodeThumbnailProps) {
  return (
    <CreditsView
      credits={props.credits}
      creditImage={"assets/credits.png"}
    />
  );
}

interface EpisodeThumbnailProps {
  credits: string,
  thumbnailImage: string
}