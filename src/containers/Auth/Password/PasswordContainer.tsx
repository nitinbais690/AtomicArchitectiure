import React, { FC } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import R from '@app/res/R';
import TextInputAnimated from '@app/components/common/TextInputAnimated';
import NavigationService from '@app/navigation/NavigationService';
import { AuthStackC } from '@app/constants/navigation';
import useForm from '@app/util/useForm';
import FooterButtonComponent from '@app/components/view/auth/footer/button';
import Header from '@app/components/view/auth/header';
import styles from '@app/res/style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface IProps {
  navigation: any;
}

const PasswordContainer: FC<IProps> = () => {
  const {
    values: formValues,
    errors: formErrors,
    handleChange: onValueChange,
    handleSubmit: onSubmit,
  }: any = useForm(handleSubmit, checkValidation);

  const textFields: any = {};

  function focusNextField(_id: string) {
    textFields[_id].focus();
  }
  console.log(313131, formValues);
  function checkValidation(values: any) {
    const errors: any = {};

    if (!values.password) {
      errors.password = "Password field can't be blank.";
    }

    if (values.password && values.password.length < 8) {
      errors.password = 'Password length atleast 8.';
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Confirm Password field can't be blank.";
    }

    if (values.confirm_password && values.confirm_password.length < 8) {
      errors.confirm_password = 'Confirm password length atleast 8.';
    }

    if (values.confirm_password && values.password !== values.confirm_password) {
      errors.confirm_password = 'Password not matched.';
    }

    return errors;
  }

  // handle otp submission
  function handleSubmit() {
    NavigationService.navigate(AuthStackC.MOBILE_AUTH_SCREEN);
  }

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.containerPrimaryBG}>
        <Header title={R.strings.auth.Set_a_password} subtitle={R.strings.auth.password_length} />
        <View style={{ paddingHorizontal: R.unit.scale(20) }}>
          <TextInputAnimated
            style={style.inputMargin}
            label={R.strings.auth.Password}
            value={formValues.password}
            onChangeText={(value: string) => onValueChange({ name: 'password', value })}
            onSubmitEditing={() => {
              focusNextField('confirm_password');
            }}
            forwardedRef={(input: string) => {
              textFields['password'] = input;
            }}
            onFocus={() => {
              focusNextField('password');
            }}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={20}
            keyboardType={'default'}
            errorText={formErrors.password}
            securedEntry={true}
          />
          <TextInputAnimated
            style={style.inputMargin}
            label={R.strings.auth.Confirm_Password}
            value={formValues.confirm_password}
            onChangeText={(value: string) => onValueChange({ name: 'confirm_password', value })}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            forwardedRef={(input: string) => {
              textFields['confirm_password'] = input;
            }}
            onFocus={() => {
              focusNextField('confirm_password');
            }}
            returnKeyType="done"
            blurOnSubmit={false}
            maxLength={20}
            keyboardType={'default'}
            errorText={formErrors.confirm_password}
            securedEntry={true}
          />
        </View>
        <FooterButtonComponent onPress={() => onSubmit()} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const style = StyleSheet.create({
  inputMargin: { marginTop: R.unit.scale(30) },
});

export default PasswordContainer;
