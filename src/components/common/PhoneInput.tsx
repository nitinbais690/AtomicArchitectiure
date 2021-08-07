import React, { useCallback, useRef, useState } from 'react';
import { Keyboard, TextInput, StyleSheet, View } from 'react-native';
import R from '@app/res/R';
import CountryPicker from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';

type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
  value?: string;
  inputMargin?: any;
  onValueChange?: any;
  error: any;
};

const TextInputAnimated: React.FC<Props> = (props) => {
  const { onValueChange, inputMargin, value, error } = props;
  const phoneRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const textFields: any = {};

  const setRef = useCallback((ref) => {
    if (ref) {
      phoneRef.current = ref;
    }
  }, []);

  const onSelect = (country: Country) => {
    onValueChange({ name: 'callingCode', value: country.callingCode });
    phoneRef.current.selectCountry(country.cca2.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          style={styles.phoneStyle}
          flagStyle={styles.flagStyle}
          textStyle={styles.textStyle}
          ref={setRef}
          onPressFlag={() => {
            setVisible(true);
          }}
          initialCountry={'gb'}
          initialValue=""
        />
      </View>
      <TextInputAnimated
        style={inputMargin}
        label={R.strings.auth.Phone}
        value={value}
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
        errorText={error}
      />
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: R.unit.scale(20),
    alignItems: 'center',
    marginTop: R.unit.scale(100),
    borderBottomWidth: R.unit.scale(1),
    borderBottomColor: '#8c5bba',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    marginTop: R.unit.scale(-10),
    alignItems: 'center',
  },
  phoneStyle: {
    width: R.unit.scale(130),
    height: R.unit.scale(36),
  },
  flagStyle: {
    width: R.unit.scale(60),
    height: R.unit.scale(35),
  },
  textStyle: {
    fontSize: R.unit.scale(17),
    color: R.color.white,
    height: R.unit.scale(36),
    fontFamily: R.font.Regular,
  },
});

export default TextInputAnimated;
