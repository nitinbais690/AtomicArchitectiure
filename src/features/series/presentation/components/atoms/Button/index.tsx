import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import componentsStyles from "@core/theme/components-style";
import { ImageSourcePropType, ViewStyle } from "react-native";
import TextView from "@series/components/atoms/Text";

export default function Button(props: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      testID={props.testID}>
      <View style={props.style}>
        {props.icon && (
          <Image
            style={componentsStyles.primaryButtonCreditIcon}
            source={props.icon}
          />
        )}
        <TextView value={props.value} style={componentsStyles.buttonText} />
      </View>
    </TouchableOpacity>
  );
}

/**
 * CustomButtonProps definition of button properties
 */
export interface CustomButtonProps {
  // Text content of button
  value: string;

  // Provision to provide different button style, may be like Primay, Secondary button style
  style?: ViewStyle;

  // onPress will be called if used click OK/center button 
  onPress: () => void;

  // Focus will be change when press top, left, right & bottom in keypad
  onFocus: () => void;

  // Will be called when a button going out of focus
  onBlur: () => void;
  // To enable to icon in button
  icon?: ImageSourcePropType;
  
  testID?: string;
}
