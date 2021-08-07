import React, { FC } from 'react';
import { View } from 'react-native';
import SocialButton from './button';
import styles from '@app/res/style';
import R from '@app/res/R';
import NavigationService from '@app/navigation/NavigationService';
import { AuthStackC } from '@app/constants/navigation';

interface IProps {
  navigation?: any;
}

const SocialComponent: FC<IProps> = () => {
  return (
    <View style={[styles.containerAuthHeader]}>
      <SocialButton
        title={R.strings.auth.Continue_with_Email}
        backgroundColor={R.color.primary110}
        type={'MaterialCommunityIcons'}
        name={'email-outline'}
        onPress={() => NavigationService.navigate(AuthStackC.PASSWORD_AUTH_SCREEN)}
      />
      <SocialButton
        title={R.strings.auth.Continue_with_Facebook}
        backgroundColor={R.color.secondary90}
        type={'FontAwesome'}
        name={'facebook'}
        onPress={() => alert('login with facebook')}
      />
      <SocialButton
        title={R.strings.auth.Continue_with_Google}
        backgroundColor={R.color.info}
        type={'Ionicons'}
        name={'md-logo-google'}
        onPress={() => alert('login with google')}
      />
    </View>
  );
};

export default SocialComponent;
