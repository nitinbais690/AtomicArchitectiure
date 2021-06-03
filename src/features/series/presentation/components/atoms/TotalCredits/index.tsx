import React from "react";
import { Image, Text, View } from "react-native";
import TextView from "@series/components/atoms/Text";
import { totalCreditsStyles } from "./style";

export default function TotalCredits(props: TotalCreditsProps) {
  return (
    <View style={totalCreditsStyles.totalCredits}>
      <Image
        style={totalCreditsStyles.creditsIcon}
        source={require("assets/credits.png")}
      />
      <TextView
        value={props.value}
        style={totalCreditsStyles.totalCreditsText}
      />
    </View>
  );
}

export interface TotalCreditsProps {
  value: string;
}
