import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const seriesContentStyles = StyleSheet.create({
  seriesContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingBottom: hp("2%"),
  },
  amcImage: {
    width: hp("9%"),
    height: hp("5.2%"),
    marginBottom: hp("2.2%"),
  },
  headerContent: {
    paddingTop: hp("1.4%"),
    paddingBottom: hp("1.4%"),
  },
  bodyContent: {
    paddingBottom: hp("2%"),
  },
});
