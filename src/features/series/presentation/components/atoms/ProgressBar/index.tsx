import React from "react";
import * as Progress from "react-native-progress";
import { colors } from "@core/theme/theme";

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <Progress.Bar
      progress={props.progress}
      height={props.height}
      width={null}
      color={colors.primary}
      unfilledColor={colors.grayText50}
      borderRadius={props?.borderRadius ?? 0}
      borderWidth={props?.borderWidth ?? 0}
    />
  );
}

export interface ProgressBarProps {
  progress: number;
  height: number;
  borderRadius?: number;
  borderWidth?: number;
}
