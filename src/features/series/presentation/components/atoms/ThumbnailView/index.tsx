import React from 'react';
import { Image, View } from 'react-native';
import { thumbnailViewStyles } from './style';

export default function ThumbnailView(props: ThumnailProps) {
  return (
    <View>
      <Image
        source={{ uri: props.thumbnailImage }}
        style={thumbnailViewStyles.thumbnailImage}
      />
    </View>
  );
};

interface ThumnailProps {
  thumbnailImage: string;
}

