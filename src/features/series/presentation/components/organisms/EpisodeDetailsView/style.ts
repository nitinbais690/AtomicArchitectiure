import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const seriesOrganismStyles = StyleSheet.create({
    seriesOrganism: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      width: "100%",
    },
    buttonSection: {
      width: "60%",
    },
    subscribedWithCredits: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "50%",
    },
    subscribedWithCreditsPadding: {
      paddingLeft: "7%",
    },
    startedWatchingSection: {
      width: "100%"
    },
    progressBar: {
      width: "88%",
      paddingBottom: hp("3%"),
      paddingRight: hp("0.3%")
    },
    startedWatching: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "88%",
    },
    startedWatchingSubView: {
      width: "45%",
    },
  });