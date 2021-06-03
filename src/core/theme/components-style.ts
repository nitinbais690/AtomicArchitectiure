import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors, fonts } from "./theme";

const componentsStyles = StyleSheet.create({
  headerText: {
    fontFamily: fonts.interSemiBold,
    fontSize: hp("7.5%"),
    lineHeight: hp("8.5%"),
    color: colors.white,
  },
  subHeaderText: {
    fontFamily: fonts.interMedium,
    fontSize: hp("3.1%"),
    lineHeight: hp("3.4%"),
    color: colors.white,
  },
  bodySmallText: {
    fontSize: hp("2.5%"),
    lineHeight: hp("3%"),
    fontFamily: fonts.interRegular,
    color: colors.grayText,
  },
  bodyText: {
    fontFamily: fonts.interMedium,
    fontSize: hp("3.1%"),
    lineHeight: hp("3.4%"),
    color: colors.grayText,
  },
  buttonText: {
    fontFamily: fonts.interMedium,
    fontSize: hp("3%"),
    lineHeight: hp("3.3%"),
    color: colors.white,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    fontFamily: fonts.interRegular,
    borderRadius: hp("5%"),
    paddingHorizontal: hp("5%"),
    borderColor: colors.white,
    borderWidth: 2,
    paddingVertical: hp("2.1%"),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    borderRadius: hp("5%"),
    fontFamily: fonts.interRegular,
    paddingHorizontal: hp("5%"),
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: hp("2.1%"),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    backgroundColor: colors.primary,
    height: hp("8%"),
    width: hp("8%"),
    borderRadius: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.white,
    borderWidth: 2,
    padding: hp("1%"),
  },
  playButtonIcon: {
    height: hp("3.5%"),
    width: hp("3%"),
    marginLeft: hp("0.5%"),
  },
  primaryButtonCreditIcon: {
    height: hp("3%"),
    width: hp("3%"),
    marginRight: hp("0.6%"),
  },
  creditText: {
    fontSize: hp("2.5%"),
    lineHeight: hp("2.5%"),
    color: colors.white,
    fontFamily: fonts.interRegular,
    paddingLeft: hp("0.5%"),
  },
});

export default componentsStyles