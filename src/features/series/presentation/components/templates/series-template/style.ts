import { colors } from "@core/theme/theme";
import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const seriesTemplateStyles = StyleSheet.create({
  flex1: { flex: 1 },
  seriesScreen: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  seriesImage: {
    resizeMode: "cover",
    height: hp("100%"),
    width: "100%",
  },
  linearGradient: {
    opacity: 1,
  },
  seriesContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  totalCredits: {
    paddingTop: "2%",
    width: "8%",
    height: "100%",
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
  seriesMainContent: {
    width: "80%",
    marginRight: "8%",
    height: "100%",
  },
  seriesSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "85%",
    paddingBottom: "3%",
  },
  seasonsAndEpisodesSection: {
    flexDirection: "column",
    width: "100%",
    height: "30%",
    paddingTop: "3%",
  },
  seasonsAndEpisodesText: {
    color: "#9BADBE",
    fontSize: hp("3%"),
    lineHeight: hp("3.4%"),
    fontWeight: "500",
  },
  seriesContent: {
    width: "50%",
  },
  showViewHeight: {
    height: "85%",
  },
  hideViewHeight: {
    height: "0%",
  },
  seasonPartialViewHeight: {
    height: hp("15%"),
  },
  seasonFullViewHeight: {
    paddingHorizontal: "8%",
    width: "100%",
    height: "100%",
    backgroundColor: colors.blueBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
