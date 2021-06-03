import React from "react";
import { ImageBackground } from "react-native";
import { ImageSourcePropType, ViewStyle } from "react-native";

export default function ImageBackgroundView({
  source,
  children,
  style,
}: ImageBackgroundProps) {
  return (
    <ImageBackground source={source} style={style}>
      {children}
    </ImageBackground>
  );
}

export interface ImageBackgroundProps {
  source: ImageSourcePropType;
  children: Element;
  style?: ViewStyle;
}

