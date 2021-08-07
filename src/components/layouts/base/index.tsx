import React from 'react';

// constant/service
import R from '@app/res/R';

// components
import { View, ViewStyle, StyleSheet, ScrollView, StatusBar } from 'react-native';
import BaseHeader from './BaseHeader';

const BaseLayout: React.FC<PropsI> = (props) => {
  const { variant = 'base', disableScrollView = false, enableHeader = false } = props;

  let bodyStyles = { ...styles.body };
  if (variant === 'base') {
    bodyStyles = { ...bodyStyles, ...styles.baseBody };
  }

  const BodyView: React.FC<any> = (p) => {
    return disableScrollView ? (
      <View style={[bodyStyles, props.bodyStyles ? props.bodyStyles : {}]} {...p}>
        {p.children}
      </View>
    ) : (
      <ScrollView
        style={[bodyStyles, props.bodyStyles ? props.bodyStyles : {}]}
        {...p}
        showsVerticalScrollIndicator={false}
      >
        {p.children}
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1, ...props.rootStyles }}>
      <StatusBar backgroundColor={'#FF0F0F'} />
      {enableHeader ? <BaseHeader {...props} /> : null}
      <BodyView>{props.children}</BodyView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(20),
  },
  baseBody: {},
});

export interface PropsI {
  navigation?: any;
  title?: string;
  variant?: 'base' | 'home' | 'webview';
  disableBack?: boolean;
  disableMenu?: boolean;
  disableSearch?: boolean;
  disableCart?: boolean;
  hideEnableLocation?: boolean;
  disableScrollView?: boolean;
  enableHeader?: boolean;
  enableRefreshControl?: boolean;
  rootStyles?: ViewStyle;
  bodyStyles?: ViewStyle;
}

export default BaseLayout;
