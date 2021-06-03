import React, { useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { seasonItemStyles } from "./style";
import TextView from "@series/components/atoms/Text";
import componentsStyles from "@core/theme/components-style";
import Constants from "@constants/Constants";

export default function SeasonItem(props: SeasonItemProps) {
  const [isItemFocused, setIsItemFocused] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        setIsItemSelected(true);
        props.onSeasonSelected(props.id);
      }}
      onFocus={() => {
        setIsItemFocused(true);
        props.onSeasonSelected(props.id);
      }}
      onBlur={() => setIsItemFocused(false)}
      testID={props.testID}
    >
      <View style={getFocusStyle(isItemFocused, isItemSelected, props)}>
        <TextView
          value={getSeasonTitle(props.seasonNumber)}
          style={
            isItemFocused || isItemSelected
              ? componentsStyles.subHeaderText
              : componentsStyles.bodyText
          }
        />
      </View>
    </TouchableOpacity>
  );
}

function getSeasonTitle(seasonNo: number) {
  return `${Constants.season} ${seasonNo}`;
}

//func to apply different styles for focused item and selected item
function getFocusStyle(
  isItemFocused: boolean,
  isItemSelected: boolean,
  props: SeasonItemProps
): Array<ViewStyle> {
  if (isItemFocused) {
    return [
      seasonItemStyles.item,
      seasonItemStyles.itemBorder,
      seasonItemStyles.itemFocusOrSelected,
    ];
  } else if (isItemSelected || props.id === props.selectedSeasonId) {
    return [seasonItemStyles.item, seasonItemStyles.itemFocusOrSelected];
  } else {
    return [seasonItemStyles.item];
  }
}

export interface SeasonItemProps {
  id: string;
  seasonNumber: number;
  onSeasonSelected: Function;
  selectedSeasonId: String;
  testID?: string;
}
