import React, { FC } from 'react';

import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from 'react-native';

import R from '@app/res/R';
import Text from './Text';

export interface ButtonProps extends TouchableNativeFeedbackProps {
  text: string;
  subText?: string;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'sm' | 'md' | 'lg';
  gutterBottom?: number;
  gutterTop?: number;
  width?: string;
  leftComponent?: any;
  rightComponent?: any;
  borderRadiusRounded?: number;
  backgroundColor?: string;
  borderColor?: string;
  // text props
  color?: string;
  font?: 'light' | 'regular' | 'italic' | 'bold' | 'medium' | 'semibold' | 'black';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  alignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  // styles
  btnWrapperStyles?: any;
  btnTextStyles?: any;
  btnSubTextStyles?: any;
  leftSectionStyle?: any;
  rightSectionStyle?: any;

  isShowLoader?: boolean;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    text,
    subText = undefined,
    variant = 'contained',
    gutterBottom = 0,
    gutterTop = 0,
    size = 'lg',
    disabled,
    onPress,
    leftComponent,
    rightComponent,
    width = '100%',
    backgroundColor,
    borderColor,
    // text props
    color = R.color.white,
    font = 'regular',
    align = 'center',
    alignVertical = 'center',
    transform = 'none',

    btnWrapperStyles,
    btnTextStyles,
    btnSubTextStyles,
    leftSectionStyle,
    rightSectionStyle,
    borderRadiusRounded = -1,
    isShowLoader = false,
    isLoading = false,
    ...touchableProps
  } = props;

  const sizes = { sm: 28, md: 32, lg: 44 };
  const borderRadius = { sm: 4, md: 4, lg: 8 };
  const fontSizes = { sm: 10, md: 12, lg: 17 };

  return (
    <TouchableNativeFeedback
      {...touchableProps}
      onPress={disabled !== true ? onPress : undefined}
      style={{
        borderRadius:
          borderRadiusRounded !== -1
            ? R.unit.scale(borderRadiusRounded)
            : R.unit.scale(borderRadius[size]),
      }}
    >
      <View
        style={{
          width: width,
          height: R.unit.scale(sizes[size]),
          ...styles.btn,
          ...styles[`btn_${variant}`],
          marginBottom: R.unit.scale(gutterBottom),
          marginTop: R.unit.scale(gutterTop),
          opacity: disabled === true ? 0.8 : 1,
          backgroundColor,
          borderColor,
          borderRadius:
            borderRadiusRounded !== -1
              ? R.unit.scale(borderRadiusRounded)
              : R.unit.scale(borderRadius[size]),
          ...btnWrapperStyles,
        }}
      >
        {isShowLoader && isLoading ? null : (
          <>
            {leftComponent ? (
              <View style={{ ...styles.leftSection, ...leftSectionStyle }}>{leftComponent}</View>
            ) : null}
            <Text
              variant="buttonText"
              font={font}
              color={color}
              align={align}
              alignVertical={alignVertical}
              transform={transform}
              style={{
                fontSize: R.unit.scale(fontSizes[size]),
                ...btnTextStyles,
              }}
            >
              {text}
            </Text>

            {subText ? (
              <Text
                style={{
                  ...btnSubTextStyles,
                }}
              >
                {subText}
              </Text>
            ) : null}
            {rightComponent ? (
              <View style={{ ...styles.rightSection, ...rightSectionStyle }}>{rightComponent}</View>
            ) : null}
          </>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn_text: {
    backgroundColor: 'transparent',
  },
  btn_outlined: {
    backgroundColor: 'transparent',
    borderColor: R.color.primary,
    borderWidth: R.unit.scale(1),
  },
  btn_contained: {
    backgroundColor: R.color.primary,
  },
  leftSection: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: R.unit.scale(8),
  },
  rightSection: {
    position: 'absolute',
    right: R.unit.scale(10),
  },
});

export default Button;
