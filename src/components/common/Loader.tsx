import React, { FC } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import R from '@app/res/R';
import Text from '@app/components/common/Text';
import styles from '@app/res/style';

export interface PropsI {
  label?: string;
  visible: boolean;
}

const Loader: FC<PropsI> = ({ label = 'loading...', visible = false }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={[
          styles.containerTransparent,
          {
            backgroundColor: 'rgba(0,0,0,0.5)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        <ActivityIndicator size="small" color={R.color.white} />
        <Text variant={'content'} color={R.color.white} style={{ marginLeft: R.unit.scale(10) }}>
          {label}
        </Text>
      </View>
    </Modal>
  );
};

export default Loader;
