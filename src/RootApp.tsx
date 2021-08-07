import React from 'react';
import RootNavigator from '@app/navigation';
import NavigationService from './navigation/NavigationService';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { ImageBackground } from 'react-native';
import R from '@app/res/R';
import styles from '@app/res/style';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return <ImageBackground source={R.image.bgSplash()} style={styles.container} />;
  } else {
    return (
      <RootNavigator
        ref={(ref) => {
          NavigationService.setTopLevelNavigator(ref);
        }}
      />
    );
  }
}
