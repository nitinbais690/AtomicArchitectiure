import React from 'react';
import componentsStyles from "@core/theme/components-style";

import { Image, View } from 'react-native';
import TextView from "@series/components/atoms/Text";
import { creditsViewStyles } from './style';

export default function CreditsView(props: CreditsProps) {
  return (
    <View style={creditsViewStyles.creditView}>
      <Image
        source={require("assets/circle.png")}
        style={creditsViewStyles.creditImage}
      />
      <TextView value={props.credits} style={componentsStyles.creditText} />
    </View>
  );
};

interface CreditsProps {
  creditImage: string;
  credits: string;
}
