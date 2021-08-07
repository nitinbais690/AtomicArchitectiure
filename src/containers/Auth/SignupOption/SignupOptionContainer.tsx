import React, { FC } from 'react';
import { View } from 'react-native';
import R from '@app/res/R';
import styles from '@app/res/style';
import Header from '@app/components/view/auth/header';
import Footer from '@app/components/view/auth/footer';
import SocialComponent from '@app/components/view/auth/social';
import NavigationService from '@app/navigation/NavigationService';
import { AuthStackC } from '@app/constants/navigation';
export interface IProps {
  navigation: any;
}

const SignupOptionContainer: FC<IProps> = () => {
  return (
    <View style={styles.containerPrimaryBG}>
      <Header title={R.strings.auth.Create_your_account} align={'center'} />
      <SocialComponent />
      <View
        style={{
          position: 'absolute',
          bottom: R.unit.scale(15),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Footer
          title={R.strings.auth.Already_joined}
          subtitle={R.strings.auth.Log_in}
          color={R.color.white}
          onPress={() => NavigationService.navigate(AuthStackC.LOGIN_OPTION_SCREEN)}
        />
      </View>
    </View>
  );
};

export default SignupOptionContainer;
