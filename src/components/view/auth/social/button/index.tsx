import React, { FC } from 'react';
import R from '@app/res/R';
import { View, StyleSheet } from 'react-native';
import Button from '@app/components/common/Button';
import IconButton from '@app/components/common/IconButton';

interface IProps {
  navigation?: any;
  title?: string;
  type?: string;
  name?: string;
  backgroundColor?: string;
  onPress?: any;
}

const SocialButton: FC<IProps> = (props) => {
  const { title, backgroundColor, name, type, onPress } = props;
  return (
    <Button
      text={`${title}`}
      variant={'contained'}
      gutterTop={25}
      leftComponent={
        <IconButton size={'sm'} type={type} name={name} color={R.color.white} shape={'square'} />
      }
      onPress={() => onPress()}
      leftSectionStyle={style.leftIcon}
      backgroundColor={backgroundColor}
    />
  );
};

const style = StyleSheet.create({
  leftIcon: {
    position: 'absolute',
    left: 10,
  },
});

export default SocialButton;
