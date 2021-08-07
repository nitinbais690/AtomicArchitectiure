import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '@app/store/auth/authSlice';

// TODO Use ENV variable here to have proper URL base on environment

import { View, StyleSheet } from 'react-native';
import R from '@app/res/R';
import Button from '@app/components/common/Button';
import { AppStackC } from '@app/constants/navigation';
import NavigationService from '@app/navigation/NavigationService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface IProps {
  navigation: any;
}

const LoginContainer: FC<IProps> = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (auth && auth.isAuthenticated) {
      NavigationService.stackFirst(AppStackC.APP_BOTTOM_STACK_SCREEN);
    }
  }, [auth]);

  const getAccountDetail = (data: any) => {
    dispatch(loginRequest(data));
  };

  return (
    <View style={styles.root}>
      <KeyboardAwareScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: R.unit.scale(50),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            width={'94%'}
            text={R.strings.comman.Login}
            borderColor={R.color.primary}
            gutterTop={5}
            borderRadiusRounded={4}
            font={'bold'}
            isShowLoader={true}
            isLoading={false}
            onPress={() => getAccountDetail({})}
            backgroundColor={R.color.secondary}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: R.color.white,
    alignItems: 'center',
  },
});

export default LoginContainer;
