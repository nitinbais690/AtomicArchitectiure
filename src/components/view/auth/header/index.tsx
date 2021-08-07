import React, { FC } from 'react';
import R from '@app/res/R';
import { View } from 'react-native';
import Text from '@app/components/common/Text';
import styles from '@app/res/style';
interface IProps {
  navigation?: any;
  title?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  subtitle?: string;
}

const AuthHeaderComponent: FC<IProps> = (props) => {
  const { title, subtitle, align = 'left' } = props;

  return (
    <View style={[styles.containerAuthHeader]}>
      {title && (
        <Text variant={'h3'} fontWeight={'500'} color={R.color.white} align={align}>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text variant={'content'} fontWeight={'400'} color={R.color.white} align={align}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default AuthHeaderComponent;
