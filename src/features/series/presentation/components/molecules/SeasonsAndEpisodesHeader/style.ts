import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const seasonsAnsEpisodesHeaderStyles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: hp("5%"),
  },
  headerStyle: {
    marginHorizontal: 16,
    width: "100%",
    paddingTop: 50
  }
});
