import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export const thumbnailViewStyles = StyleSheet.create({
  thumbnailImage: {
    borderRadius: hp("2.5%"),
    height: "100%",
    width: "100%"
  },
});