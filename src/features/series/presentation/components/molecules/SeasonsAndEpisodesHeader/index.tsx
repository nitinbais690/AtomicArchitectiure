import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { seasonsAnsEpisodesHeaderStyles } from "./style";
import componentsStyles from "@core/theme/components-style";
import { colors } from "@core/theme/theme";

import Constants from "@constants/Constants";

import Divider from "@series/components/atoms/Divider";
import TextView from "@series/components/atoms/Text";

export default function SeasonsAndEpisodesHeader() {
  return (
    <View style={seasonsAnsEpisodesHeaderStyles.header}>
      {SeasonsEpisodeHeader()}
      {DividerView()}
    </View>
  );
}

function SeasonsEpisodeHeader() {
  return (
    <TextView
      value={
        Constants.seasonsWithSpace +
        Constants.ambracenceSymbol +
        Constants.episodesWithSpace
      }
      style={componentsStyles.bodyText}
    />
  );
}

function DividerView() {
  return <Divider color={colors.grayText} height={hp("0.35%")} opacity={0.5} />;
}
