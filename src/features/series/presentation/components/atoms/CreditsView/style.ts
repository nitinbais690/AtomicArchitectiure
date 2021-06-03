import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { colors } from "@core/theme/theme";

export const creditsViewStyles = StyleSheet.create({
  creditView: {
    width: hp("8.5%"),
    height: hp("4.5%"),
    backgroundColor: colors.primary,
    borderRadius: hp("4%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: hp("2%"),
    marginTop: hp("2%"),
    position: "absolute",
    padding: hp("1%"),
  },
  creditImage: {
    width: hp("2%"),
    height: hp("2%"),
  },
});
