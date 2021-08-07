import React, { FC } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { View, StyleSheet } from 'react-native';
import R from '@app/res/R';
import OnBoardingItem from '@app/components/view/onboarding';
import Button from '@app/components/common/Button';
import Footer from '@app/components/view/auth/footer';
import { AuthStackC } from '@app/constants/navigation';
import NavigationService from '@app/navigation/NavigationService';

export interface IProps {
  navigation: any;
}

const slides = [
  {
    key: '1',
    title: 'Prevention',
    content: 'Access a wide range of protective tools and services to help prevent abuse',
    image: R.image.slide1(),
  },
  {
    key: '2',
    title: 'Emergency',
    content:
      'Access to appropriate information and expertise to enable them to make a right choices about their safety and well-being',
    image: R.image.slide2(),
  },
  {
    key: '3',
    title: 'Support',
    content: 'Find the help you need as victims to remain active and productive members of society',
    image: R.image.slide3(),
  },
];

const OnBoardingContainer: FC<IProps> = () => {
  const _renderItem = ({ item }: any) => {
    return <OnBoardingItem item={item} />;
  };

  return (
    <View style={styles.root}>
      <AppIntroSlider
        style={styles.vwSlider}
        data={slides}
        renderItem={_renderItem}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
      <View style={styles.vwBottom}>
        <Button
          variant={'contained'}
          backgroundColor={R.color.primary}
          text={R.strings.auth.Create_Account}
          onPress={() => NavigationService.navigate(AuthStackC.SIGNUP_OPTION_SCREEN)}
        />
        <Footer
          title={R.strings.auth.Already_joined}
          subtitle={R.strings.auth.Log_in}
          onPress={() => NavigationService.navigate(AuthStackC.LOGIN_OPTION_SCREEN)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: R.color.white,
    alignItems: 'center',
  },
  vwSlider: {
    width: R.unit.windowWidth(1),
    height: '100%',
  },
  vwBottom: {
    width: '90%',
    alignItems: 'center',
    marginBottom: R.unit.scale(30),
  },
  dotStyle: {
    width: R.unit.scale(12),
    height: R.unit.scale(12),
    borderRadius: R.unit.scale(6),
    borderWidth: R.unit.scale(2),
    borderColor: R.color.gray5,
    backgroundColor: R.color.white,
  },
  activeDotStyle: {
    width: R.unit.scale(12),
    height: R.unit.scale(12),
    borderRadius: R.unit.scale(6),
    borderWidth: R.unit.scale(2),
    borderColor: R.color.info,
    backgroundColor: R.color.info,
  },
});

export default OnBoardingContainer;
