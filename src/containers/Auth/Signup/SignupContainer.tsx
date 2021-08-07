import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import R from '@app/res/R';
import TextInputAnimated from '@app/components/common/TextInputAnimated';
import utils from '@app/util/utils';
import useForm from '@app/util/useForm';
import { AuthStackC } from '@app/constants/navigation';
import NavigationService from '@app/navigation/NavigationService';
import Header from '@app/components/view/auth/header';
import styles from '@app/res/style';
import FooterButtonComponent from '@app/components/view/auth/footer/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface IProps {
  navigation: any;
}

const SignupContainer: FC<IProps> = () => {
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

  function checkValidation(values: any) {
    const errors: any = {};

    if (!values.first_name) {
      errors.first_name = 'First name is required';
    }

    if (!values.last_name) {
      errors.last_name = 'Last name is required';
    }

    if (!values.email || !utils.emailREX.test(String(values.email).toLowerCase())) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  // handle otp submission
  function handleSubmit() {
    NavigationService.navigate(AuthStackC.PASSWORD_AUTH_SCREEN);
  }
  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.containerPrimaryBG}>
        <Header title={R.strings.auth.create_account} />
        <View style={{ paddingHorizontal: R.unit.scale(20) }}>
          <TextInputAnimated
            style={style.inputMargin}
            label={R.strings.auth.First_Name}
            value={formValues.first_name}
            onChangeText={(value: string) => onValueChange({ name: 'first_name', value })}
            onSubmitEditing={() => {
              focusNextField('last_name');
            }}
            forwardedRef={(input: string) => {
              textFields['first_name'] = input;
            }}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={20}
            keyboardType={'default'}
            onFocus={() => {
              focusNextField('first_name');
            }}
            errorText={formErrors.first_name}
          />
          <TextInputAnimated
            style={style.inputMargin}
            label={R.strings.auth.Last_name}
            value={formValues.last_name}
            onChangeText={(value: string) => onValueChange({ name: 'last_name', value })}
            onSubmitEditing={() => {
              focusNextField('email');
            }}
            forwardedRef={(input: string) => {
              textFields['last_name'] = input;
            }}
            onFocus={() => {
              focusNextField('last_name');
            }}
            returnKeyType="next"
            blurOnSubmit={false}
            maxLength={20}
            keyboardType={'default'}
            errorText={formErrors.last_name}
          />
          <TextInputAnimated
            forwardedRef={(input: string) => {
              textFields['email'] = input;
            }}
            onFocus={() => {
              focusNextField('email');
            }}
            style={style.inputMargin}
            label={R.strings.auth.Email}
            contextMenuHidden={false}
            value={formValues.email}
            keyboardType={'email-address'}
            onChangeText={(value: string) => onValueChange({ name: 'email', value })}
            returnKeyType="done"
            maxLength={25}
            errorText={formErrors.email}
          />
        </View>
        <FooterButtonComponent isLeftVisible={false} onPress={() => onSubmit()} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: R.color.primary90,
    paddingHorizontal: R.unit.scale(25),
    paddingTop: R.unit.scale(75),
  },
  inputMargin: { marginTop: R.unit.scale(30) },
  vwRightArrow: {
    position: 'absolute',
    bottom: R.unit.scale(75),
    right: 0,
    paddingHorizontal: R.unit.scale(25),
  },
  iconArrowRight: {
    width: R.unit.scale(56),
    height: R.unit.scale(42),
    borderRadius: R.unit.scale(5),
    backgroundColor: R.color.tertiary,
  },
});

export default SignupContainer;
