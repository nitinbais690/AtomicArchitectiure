import React from 'react';

import { StyleSheet, Text as TextC, TextProps, TextStyle } from 'react-native';

import R from '@app/res/R';

const Text: React.FC<ITextProps> = (props) => {
  const {
    variant = 'title2',
    color = R.color.fontPrimary,
    style = {},
    font = 'regular',
    gutterBottom = 0,
    gutterTop = 0,
    align = 'auto',
    alignVertical = 'auto',
    fontStyle = 'normal',
    fontWeight = 'normal',
    transform = 'none',
    ...restProps
  } = props;
  const defaultStyles = styles[variant];
  return (
    <TextC
      style={{
        ...styles[font],
        ...defaultStyles,
        color,
        textAlign: align,
        textAlignVertical: alignVertical,
        marginBottom: R.unit.scale(gutterBottom),
        marginTop: R.unit.scale(gutterTop),
        textTransform: transform,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        ...style,
      }}
      {...restProps}
    >
      {props.children}
    </TextC>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: R.unit.scale(18),
  },
  title2: {
    fontSize: R.unit.scale(16),
  },
  title3: {
    fontSize: R.unit.scale(14),
  },
  content: {
    fontSize: R.unit.scale(12),
  },
  content2: {
    fontSize: R.unit.scale(10),
  },
  small: {
    fontSize: R.unit.scale(8),
  },
  h0: {
    fontSize: R.unit.scale(28),
  },
  h1: {
    fontSize: R.unit.scale(24),
  },
  h2: {
    fontSize: R.unit.scale(22),
  },
  h3: {
    fontSize: R.unit.scale(20),
  },
  h4: {
    fontSize: R.unit.scale(18),
  },
  h5: {
    fontSize: R.unit.scale(13),
  },
  h6: {
    fontSize: R.unit.scale(10),
  },
  buttonText: {
    fontSize: R.unit.scale(18),
  },
  light: {
    fontFamily: R.font.Light,
  },
  regular: {
    fontFamily: R.font.Regular,
  },
  bold: {
    fontFamily: R.font.Bold,
  },
  italic: {
    fontFamily: R.font.Italic,
  },
  medium: {
    fontFamily: R.font.Medium,
  },
  semibold: {
    fontFamily: R.font.SemiBold,
  },
  black: {
    fontFamily: R.font.Black,
  },
});

/*
title - 18dp - main top title 
title2 - 16dp will be used in tab or section
title3 - 14dp will be used in tab or section
small - 8dp below title small gray text
content - 12 dp , black
content2 - 10 dp, black
h1 - 32dp
h2 - 24dp
h3 - 18dp
h4 - 16dp
h5 - 13dp
h6 - 10dp
buttonText - 12dp
*/

export interface ITextProps extends TextProps {
  children?: any;
  variant?:
    | 'title'
    | 'title2'
    | 'title3'
    | 'content'
    | 'content2'
    | 'small'
    | 'h6'
    | 'h5'
    | 'h4'
    | 'h3'
    | 'h2'
    | 'h1'
    | 'h0'
    | 'buttonText';
  style?: TextStyle;

  // util
  color?: string;
  font?: 'light' | 'regular' | 'italic' | 'bold' | 'medium' | 'semibold' | 'black';
  gutterBottom?: number;
  gutterTop?: number;
  opactity?: number;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'normal'
    | 'bold';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  alignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

export default Text;
