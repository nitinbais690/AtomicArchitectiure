import { colors } from "@core/theme/theme";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


export const episodeCardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: hp("3.5%"),
    backgroundColor: colors.accents,
    paddingVertical: hp("3%"),
    paddingHorizontal: hp("3%"),
    borderColor: "white",
    width: "100%",
  },
  unfocusedCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: hp("3%"),
    paddingHorizontal: hp("3%"),
    width: "100%",
  },

  borderView: {
    borderWidth: hp("0.4%"),
  },
});