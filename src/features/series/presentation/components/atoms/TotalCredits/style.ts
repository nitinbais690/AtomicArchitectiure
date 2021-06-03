import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const totalCreditsStyles = StyleSheet.create({
  totalCredits: {
    backgroundColor: "#686EFF",
    paddingRight: hp("0.6%"),
    paddingLeft: hp("0.4%"),
    paddingVertical: hp("2.5%"),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: hp("5%"),
    borderBottomRightRadius: hp("5%"),
  },
  totalCreditsText: {
    fontFamily: "Inter-Regular",
    fontSize: hp("2.5%"),
    lineHeight: hp("2.6%"),
    color: "#ffffff",
  },
  creditsIcon: {
    height: hp("2.5%"),
    width: hp("2.5%"),
    marginRight: hp("0.6%"),
  },
});
