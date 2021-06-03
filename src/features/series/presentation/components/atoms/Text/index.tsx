import React from "react";
import { Text, TextStyle } from "react-native";

export default function TextView(props: TextViewProps) {
  return (
    <Text
      style={props.style}
      testID={props.testID}
      numberOfLines={props.numberOfLines}
    >
      {props.value}
    </Text>
  );
}

/**
 * TextViewProps definition of Text properties
 */
export interface TextViewProps {
  // Content of Text View
  value: string;
  // Text Style
  style?: TextStyle;
  // Total number of lines does not exceed this number
  numberOfLines?: number;
  testID?: string;
}
