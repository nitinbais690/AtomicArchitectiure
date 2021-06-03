import React from 'react';
import { ColorValue, View } from 'react-native';

export default function Divider(props: DividerProps) {
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: props?.width ?? '100%',
        height: props?.height ?? 10,
        alignContent: 'center',
        justifyContent: 'center',
        opacity: props?.opacity ?? 1,
        marginTop: 12,
        marginBottom: 36,
      }} />
  );
};

export interface DividerProps{
  color: ColorValue;
  width?: number;
  height?: number;
  opacity?: number;
}
