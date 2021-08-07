import React, { useState, useEffect, useRef } from 'react';
import {
  TextInput as TextInputR,
  View,
  StyleSheet,
  TextInputProps,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

import R from '@app/res/R';
import Text from './Text';

interface PropsI extends TextInputProps {
  onChangeText?: (text: string) => void;
  onHandleClear?: () => void;
  onVerifiedClick?: () => void;
  containerStyle?: any;
  inputContainer?: any;
  style?: any;
  textButton?: boolean;
  textButtonPressed?: () => void;
  label: string;
  showCancelText?: boolean;
  isVerified?: boolean;
  editable?: boolean;
  alignItems?: string;
  info?: string;
  error?: string;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}

const TextInput: React.FC<PropsI> = (props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // update value when receives from parent
    setValue(props.value);
  }, [props.value]);

  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<any>(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? R.color.white : R.color.secondary;
  if (props.error) {
    color = R.color.danger;
  }

  const handleChangeText = (text: string) => {
    setValue(text);

    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View
      style={{
        ...props.containerStyle,
      }}
    >
      <View
        style={{
          ...styles.inputContainer,
          borderColor: value ? R.color.gray5 : R.color.gray4,
          ...props.inputContainer,
        }}
      >
        <TextInputR
          {...props}
          ref={inputRef}
          style={{
            ...styles.input,
            ...props.style,
          }}
          editable={props.editable}
          selectionColor={R.color.white}
          placeholderTextColor={
            props.placeholderTextColor ? props.placeholderTextColor : R.color.fontSecondary
          }
          onBlur={(event) => {
            setIsFocused(false);
            props.onBlur?.(event);
          }}
          onFocus={(event) => {
            setIsFocused(true);
            props.onFocus?.(event);
          }}
          onChangeText={(e: string) => handleChangeText(e)}
        />
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
          <Animated.View
            style={[
              styles.labelContainer,
              {
                transform: [
                  {
                    scale: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.75],
                    }),
                  },
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [R.unit.scale(12), R.unit.scale(-12)],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [R.unit.scale(16), 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text variant="content" color={R.color.white}>
              {props.label}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>

      {props.info ? (
        <Text variant="content" gutterTop={2} color={R.color.gray1}>
          {props.info}
        </Text>
      ) : null}
      {props.error ? (
        <Text variant="content" gutterTop={2} color={R.color.danger}>
          {props.error}
        </Text>
      ) : null}
    </View>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: R.unit.scale(1),
    borderColor: R.color.gray4,
    // borderRadius: R.unit.scale(5),
    marginTop: R.unit.scale(100),
    backgroundColor: 'green',
  },
  input: {
    flex: 1,
    height: 75,
    padding: R.unit.scale(12),
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(12),
    color: R.color.white,
  },
  textButton: {
    color: R.color.primary,
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(10),
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: R.unit.scale(8),
    backgroundColor: '#8c5bba',
  },
  label: {
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(16),
  },
  error: {
    marginTop: R.unit.scale(4),
    marginLeft: R.unit.scale(12),
    fontSize: R.unit.scale(12),
    color: R.color.white,
    fontFamily: R.font.Regular,
  },
});
