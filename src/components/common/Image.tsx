import React from 'react';

import { View, StyleSheet, Animated, ImageProps, ImageURISource } from 'react-native';

const Image: React.FC<ImageCProps> = (props) => {
  const {
    thumbnailSource,
    source,
    containerStyles = {},
    thumbnailStyles = {},
    imageStyles = {},
    ...restProps
  } = props;

  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleThumbnailLoaded = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        ...styles.container,
        ...containerStyles,
      }}
    >
      {thumbnailSource ? (
        <Animated.Image
          source={thumbnailSource}
          style={{
            ...thumbnailStyles,
            opacity: thumbnailAnimated,
          }}
          onLoad={handleThumbnailLoaded}
          blurRadius={1}
          {...restProps}
        />
      ) : null}
      {source ? (
        <Animated.Image
          source={source}
          style={{
            ...imageStyles,
            ...styles.imageOverlay,
            opacity: imageAnimated,
          }}
          onLoad={handleImageLoad}
          {...restProps}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  imageOverlay: {
    backgroundColor: 'transparent',
  },
});

export interface ImageCProps extends ImageProps {
  thumbnailSource?: ImageURISource;
  source: ImageURISource;
  containerStyles?: any;
  thumbnailStyles?: any;
  imageStyles?: any;
}

export default Image;
