import React, { useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import R from '@app/res/R';
import Text from '@app/components/common/Text';
import LocalItem from './Item/LocalItem';
import PlaceDetail from './Item/LocalItem/place_detail';

export interface IProps {
  navigation?: any;
}

const LocalDataModal = (props: any) => {
  const local = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //useSelector((state: any) => state.center.center);
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [height, setHeight] = useState('85%');

  useEffect(() => {
    setModalVisible(!modalVisible);
    setHeight('85%');
  }, [props.isVisibleModal]);

  useEffect(() => {
    if (!isBlur) setModalVisible(false);
  }, [isBlur]);

  const onClickItem = (item: any) => {
    console.log(2626, item);
    setHeight('45%');
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <LocalItem
        item={item}
        index={index}
        onItemClick={(selected_item: any) => onClickItem(selected_item)}
      />
    );
  };

  const _separator = () => {
    return (
      <View
        style={{
          width: R.unit.windowHeight(1),
          height: R.unit.scale(1),
          backgroundColor: R.color.gray5,
        }}
      />
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onShow={() => {
        setIsBlur(true);
      }}
    >
      <View style={styles.centeredView}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setIsBlur(false);
            }}
          >
            <View style={{ flex: 1 }}></View>
          </TouchableWithoutFeedback>
        </View>
        <>
          <View style={[styles.modalView, { height: height }]}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  setIsBlur(false);
                }}
              >
                <View style={styles.modalStripe} />
              </TouchableWithoutFeedback>
            </View>
            {height === '45%' ? (
              <PlaceDetail onClickBack={() => setIsBlur(false)} />
            ) : (
              <>
                <Text
                  variant="font20"
                  gutterBottom={15}
                  fontWeight={'500'}
                  gutterTop={5}
                  style={{ width: '100%', paddingHorizontal: R.unit.scale(20) }}
                >
                  {R.strings.local_info.Local_Information}
                </Text>
                <View
                  style={{
                    width: R.unit.windowHeight(1),
                    height: R.unit.scale(1),
                    backgroundColor: R.color.gray5,
                    marginBottom: R.unit.scale(10),
                  }}
                />
                <FlatList
                  data={local}
                  renderItem={_renderItem}
                  bounces={false}
                  keyExtractor={(item: any, index: number) => index.toString()}
                  ItemSeparatorComponent={_separator}
                />
              </>
            )}
          </View>
        </>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: R.color.white,
    borderTopLeftRadius: R.unit.scale(5),
    borderTopRightRadius: R.unit.scale(5),
    paddingVertical: R.unit.scale(20),
    width: '100%',
  },
  modalStripe: {
    width: R.unit.scale(50),
    height: R.unit.scale(4),
    borderRadius: R.unit.scale(2),
    backgroundColor: R.color.secondary,
    marginBottom: R.unit.scale(10),
  },
});

export default LocalDataModal;
