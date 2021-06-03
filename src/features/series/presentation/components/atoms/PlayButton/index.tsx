import React from "react";
import { Image, TouchableOpacity, View, ViewStyle } from "react-native";
import componentsStyles from "@core/theme/components-style";

export default function PlayButton(props: PlayProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      testID={props.testID}>
      <View style={props.style}>
        <Image
          style={componentsStyles.playButtonIcon}
          source={require("assets/play-icon.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

export interface PlayProps {
  style?: ViewStyle,
  onPress: () => void;
  onFocus: () => void;
  onBlur: () => void;
  testID?: string;
}



