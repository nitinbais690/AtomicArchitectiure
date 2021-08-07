import React, { FC, useState, useRef } from 'react';
import { FlatList, Platform, View } from 'react-native';
import R from '@app/res/R';
import styles from '@app/res/style';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationUtil from '@app/util/locations';
import PlaceItem from '@app/components/view/searchplace/Item/row_place';
import RecentSearchItem from '@app/components/view/searchplace/Item/row_recent_search';
import RowOpations from '@app/components/view/searchplace/Item/row_option';
import { addRecentSearch } from '@app/store/location/locationSlice';
import { useSelector, useDispatch } from 'react-redux';
import NavigationService from '@app/navigation/NavigationService';
import { useEffect } from 'react';

export interface IProps {
  navigation: any;
  route: any;
}

const SearchPlaceContainer: FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.location.location);
  const [enableSearch, setSearchEnable] = useState(false);
  const [isLstDisplayed, setListViewDisplayed] = useState(false);
  const [value, setValue] = useState('');

  const onSelectOption = (option: number) => {
    setSearchEnable(true);
  };

  const getDetailLocation = async (locDetail: any) => {
    const location: any = await LocationUtil.getLocationDetail(
      locDetail.geometry.location.lat,
      locDetail.geometry.location.lng,
    );
    locDetail.city_info = location;
    dispatch(addRecentSearch(locDetail));
    selectPlace(locDetail);
  };

  const selectPlace = (_place: any) => {
    props.navigation.state.params.onSelectPlace(_place);
    NavigationService.goBack();
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <RecentSearchItem
        item={item}
        index={index}
        onClickItem={(place: any) => selectPlace(place)}
      />
    );
  };

  const _renderHeader = () => {
    return <RowOpations onClickOption={(option: number) => onSelectOption(option)} />;
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

  const _footer = () => {
    return (
      <View
        style={{
          width: R.unit.windowHeight(1),
          height: R.unit.scale(150),
          backgroundColor: R.color.white,
        }}
      />
    );
  };

  return (
    <View style={[styles.container]}>
      <GooglePlacesAutocomplete
        placeholder={R.strings.local_info.Search}
        minLength={1}
        enablePoweredByContainer={false}
        keyboardShouldPersistTaps={'always'}
        listUnderlayColor={'transparent'}
        fetchDetails={true}
        isRowScrollable={false}
        textInputProps={{
          selectionColor: R.color.gray3,
          value: value,
          onChangeText: (text: any) => setValue(text),
          onFocus: () => {
            setListViewDisplayed(true);
          },
          onBlur: () => {
            setListViewDisplayed(false);
          },
        }}
        onPress={(data, details = null) => {
          getDetailLocation(details);
        }}
        query={{
          key: 'AIzaSyC-RqRmo81hcmWMWHye9VJbqBevxNop0Q4',
          language: 'en',
        }}
        renderRow={(data) => {
          return <PlaceItem item={data} />;
        }}
        styles={{
          textInputContainer: {
            height: R.unit.scale(100),
            backgroundColor: R.color.gray5,
            paddingHorizontal: R.unit.scale(20),
            paddingTop: R.unit.scale(40),
            paddingBottom: R.unit.scale(10),
            alignItems: 'center',
            justifyContent: 'center',
          },
          textInput: {
            width: '100%',
            height: R.unit.scale(36),
            fontSize: R.unit.scale(16),
            paddingHorizontal: R.unit.scale(10),
            backgroundColor: R.color.white,
            color: R.color.black2,
            fontFamily: R.font.Regular,
          },
          listView: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: Platform.OS === 'android' ? R.unit.scale(100) : R.unit.scale(105),
            backgroundColor: R.color.white,
          },
        }}
        nearbyPlacesAPI={'GooglePlacesSearch'}
        GooglePlacesDetailsQuery={{
          fields:
            'place_id,name,vicinity,formatted_address,geometry,formatted_phone_number,opening_hours,website,rating',
        }}
      />

      {value.trim().length === 0 && (
        <View
          style={{
            width: R.unit.windowWidth(1),
            height: '100%',
            position: 'absolute',
            top: Platform.OS === 'android' ? R.unit.scale(100) : R.unit.scale(105),
            zIndex: 999999,
          }}
        >
          <FlatList
            data={location.places}
            renderItem={_renderItem}
            bounces={false}
            ListHeaderComponent={_renderHeader}
            ListFooterComponent={_footer}
            keyExtractor={(item: any, index: number) => index.toString()}
            ItemSeparatorComponent={_separator}
          />
        </View>
      )}
    </View>
  );
};

export default SearchPlaceContainer;
