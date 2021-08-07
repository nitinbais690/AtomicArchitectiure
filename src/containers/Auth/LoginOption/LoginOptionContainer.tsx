import React, { FC, useCallback, useState, useRef } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import R from '@app/res/R';
import styles from '@app/res/style';
import Header from '@app/components/view/auth/header';
import Footer from '@app/components/view/auth/footer';
import SocialComponent from '@app/components/view/auth/social';
import NavigationService from '@app/navigation/NavigationService';
import { AuthStackC } from '@app/constants/navigation';
import TextInputAnimated from '@app/components/common/TextInputAnimated';
import useForm from '@app/util/useForm';
// import Image from "@app/components/common/Image";
// import Text from "@app/components/common/Text";
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import Button from '@app/components/common/Button';

export interface IProps {
  navigation: any;
}

const LoginOptionContainer: FC<IProps> = () => {

  const {
    values: formValues,
    errors: formErrors,
    handleChange: onValueChange,
    handleSubmit: onSubmit,
  }: any = useForm(handleSubmit, checkValidation);

  const textFields: any = {};
  const [visible, setVisible] = useState(false);
  const [country, setCountryCode] = useState({});
  const phoneRef = useRef(null);
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

  const onSelect = (country: Country) => {
    setCountryCode(country);
    console.log(4141, country);
    phoneRef.current.selectCountry(country.cca2.toLowerCase());
  };

  // handle otp submission
  function handleSubmit() {
    console.log(5757, country);
    const code = country && country.callingCode ? '+' + country.callingCode + ' ' : '+44 ';
    console.log(5858, code);
    NavigationService.navigate(AuthStackC.VERIFICATION_AUTH_SCREEN, {
      mobile: code + formValues.phone,
      reqLogin: true,
    });
  }

  const setRef = useCallback((ref) => {
    if (ref) {
      phoneRef.current = ref;
    }
  }, []);

  return (
    <View style={styles.containerPrimaryBG}>
      <Header title={R.strings.auth.Welcome_back} align={'center'} />
      <View style={{ flex: 1, paddingHorizontal: R.unit.scale(20) }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: R.unit.scale(50),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginTop: R.unit.scale(-10),
              alignItems: 'center',
            }}
          >
            <PhoneInput
              style={{
                width: R.unit.scale(130),
                height: R.unit.scale(36),
              }}
              flagStyle={{
                width: R.unit.scale(60),
                height: R.unit.scale(35),
              }}
              textStyle={{
                fontSize: R.unit.scale(17),
                color: R.color.white,
                height: R.unit.scale(36),
                fontFamily: R.font.Regular,
              }}
              ref={setRef}
              onPressFlag={() => {
                setVisible(true);
              }}
              initialCountry={'gb'}
              initialValue=""
            />
          </View>
          <TextInputAnimated
            style={style.inputMargin}
            label={R.strings.auth.Phone}
            value={formValues.phone}
            onChangeText={(value: string) => onValueChange({ name: 'phone', value })}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            forwardedRef={(input: string) => {
              textFields['phone'] = input;
            }}
            onFocus={() => {
              textFields['phone'].focus();
            }}
            returnKeyType="done"
            blurOnSubmit={false}
            maxLength={10}
            keyboardType={'phone-pad'}
            errorText={formErrors.phone}
          />
        </View>
        <Button
          text={R.strings.auth.Continue}
          color={R.color.black}
          gutterTop={50}
          backgroundColor={'rgba(255,255,255,0.6)'}
          onPress={() => onSubmit()}
        />
      </View>

      <View style={{ flex: 1 }}>
        <SocialComponent />
      </View>
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
          title={R.strings.auth.no_account}
          subtitle={R.strings.auth.create_one}
          color={R.color.white}
          onPress={() => NavigationService.navigate(AuthStackC.LOGIN_OPTION_SCREEN)}
        />
      </View>
      <CountryPicker
        key={'councodePicker'}
        onSelect={onSelect}
        translation="common"
        onClose={() => setVisible(false)}
        withFilter={true}
        containerButtonStyle={{ height: 0, width: 0 }}
        withCallingCode={true}
        visible={visible}
      >
        <View />
      </CountryPicker>
    </View>
  );
};

const style = StyleSheet.create({
  inputMargin: { flex: 1 },
});

export default LoginOptionContainer;
