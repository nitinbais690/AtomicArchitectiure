import { colors } from "@core/theme/theme";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const seasonItemStyles = StyleSheet.create({
  item: {
    borderColor: "white",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    paddingVertical: hp("2"),
    borderRadius: hp("5%"),
  },
  itemBorder: {
    borderWidth: hp("0.4"),
  },
  itemFocusOrSelected: {
    backgroundColor: colors.accents,
  }
});
