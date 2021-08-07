import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';
import R from '@app/res/R';

export interface IconButtonProps {
  name?: string;
  type?: string;
  size?: 'xxs' | 'xs' | 'sm1' | 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'rounded' | 'square';
  customSize?: number;
  scale?: number;
  gutterLeft?: number;
  backgroundColor?: string;
  color?: string;
  wrapperStyles?: any;
  iconStyles?: any;
  onPress?: any;
  onPressIn?: any;
  onPressOut?: any;
  hitSlop?: any;
}

let IconButtonStyles;

const IconButton: FC<IconButtonProps> = (props) => {
  const {
    name,
    type = 'MaterialIcons',
    backgroundColor = 'transparent',
    color = R.color.white,
    size = 'sm',
    customSize,
    scale = 8,
    shape = '',
    children,
    onPress,
    onPressIn,
    onPressOut,
    gutterLeft = 0,
    // styles
    wrapperStyles,
    iconStyles,
    hitSlop,
  } = props;

  const sizes = { xxs: 10, xs: 16, sm1: 20, sm: 24, md: 32, lg: 48 };

  let borderRadius;
  switch (shape) {
    case 'square':
      borderRadius = 0;
      break;

    case 'rounded':
      borderRadius = R.unit.scale(4);
      break;

    case 'circle':
    default:
      borderRadius = R.unit.scale(sizes[size] + 8);
      break;
  }

  let btnSize = R.unit.scale(sizes[size]);
  if (customSize) {
    btnSize = R.unit.scale(customSize);
    if (shape === 'circle') {
      borderRadius = R.unit.scale(customSize) + scale;
    }
  }

  IconButtonStyles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0,
      backgroundColor,
      height: btnSize + scale,
      width: btnSize + scale,
      borderRadius,
      marginLeft: gutterLeft,
    },
    icon: {
      fontSize: btnSize,
      color,
    },
  });
  const ChildrenComponent = Icon[type];

  return (
    <TouchableOpacity
      hitSlop={hitSlop ? hitSlop : undefined}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View style={{ ...IconButtonStyles.wrapper, ...wrapperStyles }}>
        {children ? (
          children
        ) : (
          <ChildrenComponent name={name} style={{ ...IconButtonStyles.icon, ...iconStyles }} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export { IconButtonStyles };

export default IconButton;
