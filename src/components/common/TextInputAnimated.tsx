import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import R from '@app/res/R';
import IconButton from '@app/components/common/IconButton';

type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
  securedEntry?: boolean;
  errorText?: string | null;
  forwardedRef?: any;
};

const TextInputAnimated: React.FC<Props> = (props) => {
  const { label, errorText, value, style, onBlur, onFocus, ...restOfProps } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setSecureTextEntry(props.securedEntry ? props.securedEntry : false);
  }, []);
  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? R.color.white : R.color.white;
  if (errorText) {
    color = R.color.warning;
  }

  return (
    <View style={style}>
      <TextInput
        style={[styles.input, { borderColor: color, color: color }]}
        ref={props.forwardedRef}
        {...restOfProps}
        value={value}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        secureTextEntry={secureTextEntry}
        selectionColor={R.color.white}
      />
      {props.securedEntry && (
        <IconButton
          color={color}
          size="sm"
          type={'Ionicons'}
          name={'ios-eye-outline'}
          wrapperStyles={styles.iconEye}
          hitSlop={
            Platform.OS === 'android'
              ? {
                  top: R.unit.scale(30),
                  bottom: R.unit.scale(30),
                  left: R.unit.scale(30),
                  right: R.unit.scale(30),
                }
              : undefined
          }
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}
        />
      )}
      <TouchableWithoutFeedback onPress={props.onFocus ? props.onFocus : undefined}>
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
                    outputRange: [R.unit.scale(16), R.unit.scale(-16)],
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
          <Text style={[styles.label, { color }]}>{`${label}`}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : (
        <Text style={styles.error}>{''}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: R.unit.scale(12),
    borderBottomWidth: R.unit.scale(1),
    // borderRadius: R.unit.scale(4),
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(16),
    color: R.color.white,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: R.unit.scale(5),
    backgroundColor: '#8c5bba',
    alignItems: 'center',
  },
  label: {
    fontFamily: R.font.Regular,
    fontSize: R.unit.scale(12),
  },
  error: {
    marginTop: R.unit.scale(2),
    marginLeft: R.unit.scale(5),
    fontSize: R.unit.scale(10),
    color: R.color.warning,
    fontFamily: R.font.Regular,
  },
  iconEye: {
    position: 'absolute',
    right: R.unit.scale(5),
    bottom: R.unit.scale(10),
  },
});

export default TextInputAnimated;
