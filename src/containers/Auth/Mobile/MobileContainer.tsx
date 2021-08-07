import React, { FC, useRef, useState, useCallback } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import R from '@app/res/R';
import FooterButtonComponent from '@app/components/view/auth/footer/button';
import Header from '@app/components/view/auth/header';
import styles from '@app/res/style';
import TextInputAnimated from '@app/components/common/TextInputAnimated';
import useForm from '@app/util/useForm';
import NavigationService from '@app/navigation/NavigationService';
import { AuthStackC } from '@app/constants/navigation';
import PhoneInput from '@app/components/common/PhoneInput';
// import Image from "@app/components/common/Image";
// import Text from "@app/components/common/Text";
export interface IProps {
  navigation: any;
}

const MobileContainer: FC<IProps> = () => {
  const {
    values: formValues,
    errors: formErrors,
    handleChange: onValueChange,
    handleSubmit: onSubmit,
  }: any = useForm(handleSubmit, checkValidation);

  function checkValidation(values: any) {
    const errors: any = {};

    if (!values.phone) {
      errors.phone = "Phone number field can't be blank.";
    }

    if (values.phone && values.phone.length !== 10) {
      errors.phone = 'Phone number should be 10 digits.';
    }

    return errors;
  }

  // handle otp submission
  function handleSubmit() {
    NavigationService.navigate(AuthStackC.VERIFICATION_AUTH_SCREEN, {
      mobile: formValues.callingCode + formValues.phone,
    });
  }

  return (
    <View style={styles.containerPrimaryBG}>
      <Header title={R.strings.auth.whats_phone} subtitle={R.strings.auth.whats_phone_content} />
      <FooterButtonComponent onPress={() => onSubmit()} />

      <PhoneInput
        value={formValues.phone}
        error={formErrors.phone}
        onValueChange={onValueChange}
        inputMargin={style.inputMargin}
      />
    </View>
  );
};
const style = StyleSheet.create({
  inputMargin: { flex: 1 },
});

export default MobileContainer;
