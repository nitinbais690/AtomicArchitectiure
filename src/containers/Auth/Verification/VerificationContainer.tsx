import React, { FC, useState } from 'react';

import { View, StyleSheet, Keyboard } from 'react-native';
import R from '@app/res/R';
import FooterButtonComponent from '@app/components/view/auth/footer/button';
import Header from '@app/components/view/auth/header';
import styles from '@app/res/style';
import TextInputAnimated from '@app/components/common/TextInputAnimated';
import useForm from '@app/util/useForm';
import NavigationService from '@app/navigation/NavigationService';
import { AppStackC, AuthStackC } from '@app/constants/navigation';
import Loader from '@app/components/common/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface IProps {
  navigation: any;
}

const VerificationContainer: FC<IProps> = (props) => {
  const [isShowLoader, setShowLoader] = useState(false);
  const {
    values: formValues,
    errors: formErrors,
    handleChange: onValueChange,
    handleSubmit: onSubmit,
  }: any = useForm(handleSubmit, checkValidation);

  const textFields: any = {};
  function checkValidation(values: any) {
    const errors: any = {};

    if (!values.otp) {
      errors.otp = "OTP number field can't be blank.";
    }

    if (values.otp && values.otp.length <= 3) {
      errors.otp = 'OTP number should be 4 digits.';
    }

    return errors;
  }

  // handle otp submission
  async function handleSubmit() {
    await setShowLoader(true);
    setTimeout(async () => {
      await setShowLoader(false);
      NavigationService.navigate(AuthStackC.SUCCESS_ANIMATION_SCREEN);
    }, 5000);
  }

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.containerPrimaryBG}>
        <Header
          title={R.strings.auth.Enter_verification_code}
          subtitle={`${R.strings.auth.Sent_to} ${
            props.navigation.state.params ? props.navigation.state.params.mobile : ''
          }`}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: R.unit.scale(20),
            alignItems: 'center',
            marginTop: R.unit.scale(100),
          }}
        >
          <TextInputAnimated
            style={style.inputMargin}
            label={R.strings.auth.OTP_Code}
            value={formValues.otp}
            onChangeText={(value: string) => onValueChange({ name: 'otp', value }, true)}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            forwardedRef={(input: string) => {
              textFields['otp'] = input;
            }}
            onFocus={() => {
              textFields['otp'].focus();
            }}
            returnKeyType="done"
            blurOnSubmit={false}
            maxLength={4}
            keyboardType={'numeric'}
            errorText={formErrors.otp}
          />
        </View>
        <FooterButtonComponent isVisibleResend={true} onPress={() => onSubmit()} />
        <Loader visible={isShowLoader} label={'Verifying...'} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const style = StyleSheet.create({
  inputMargin: { flex: 1 },
});

export default VerificationContainer;
