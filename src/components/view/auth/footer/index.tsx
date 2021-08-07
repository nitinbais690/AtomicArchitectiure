import React, { FC } from 'react';
import R from '@app/res/R';
import { View } from 'react-native';
import Text from '@app/components/common/Text';
interface IProps {
  navigation?: any;
  title?: string;
  subtitle?: string;
  color?: string;
  onPress?: any;
}

const AuthFooterTxtComponent: FC<IProps> = (props) => {
  const { title, subtitle, color = R.color.black2, onPress } = props;
  return (
    <View style={{ marginVertical: R.unit.scale(10) }}>
      <Text variant="title3" fontWeight={'500'} color={color}>
        {`${title}`}
        <Text variant="title3" color={R.color.info} onPress={() => onPress()}>
          {`${subtitle}`}
        </Text>
      </Text>
    </View>
  );
};

export default AuthFooterTxtComponent;
