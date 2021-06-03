import React from "react";
import { View } from "react-native";
import { seasonsAndEpisodesStyle } from "./style";

export default function SeasonsAndEpisodesTemplate(
  props: SeasonsAndEpisodesTemplateProps
) {
  return (
    <View style={seasonsAndEpisodesStyle.seasonsAndEpisodesTemplate}>
      {props.headerView}
      {props.bodyView}
    </View>
  );
}

interface SeasonsAndEpisodesTemplateProps {
  headerView: any;
  bodyView: any;
}
