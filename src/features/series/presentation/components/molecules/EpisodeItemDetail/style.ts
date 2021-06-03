import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const episodeItemDetailStyles = StyleSheet.create({
  container: {
    marginHorizontal: hp("3%"),
    marginVertical: hp("1"),
    width: "71%",
  },
  episodeTitleSection: {
    flex: 2,
    paddingBottom: hp("3%"),
  },
  episodeTitle: {
    paddingBottom: hp("0.6%")
  },
  space: {
    flex: 1,
  },
  episodeDesc: {
    flex: 1,
  },
});
