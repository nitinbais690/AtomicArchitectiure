import React from "react";
import { ActivityIndicator, View } from "react-native"
import { loaderStyles } from "./styles"
import { colors } from "@core/theme/theme"

export default function Loader({size}: LoaderProps) {
  return (
    <View style={[loaderStyles.container]}>
      <ActivityIndicator size={size} color={colors.white} />
    </View>
  );
};

export interface LoaderProps{
  size: number
}