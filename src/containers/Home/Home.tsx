import React, { FC, useEffect, useState, useRef, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import R from '@app/res/R';
import MapView from 'react-native-maps';
import IconButton from '@app/components/common/IconButton';
import Text from '@app/components/common/Text';
import LocationUtil from '@app/util/locations';
import LocalModal from '@app/components/view/modal/LocalDataModal';
import NavigationService from '@app/navigation/NavigationService';
import { AppStackC } from '@app/constants/navigation';
import PlaceInfo from '@app/components/view/searchplace/place_info';
import apiUrls from '@app/constants/apiUrls';
export interface IProps {
  navigation: any;
}

const HomeContainer: FC<IProps> = (props) => {
  const mapRef = useRef(undefined);
  const [search_place, setSearchPlace] = useState({} as any);
  const [isVisibleLocalDataModal, setLocalDataModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({} as any);
  const [region, setRegion] = useState({
    latitude: 51.509865,
    longitude: -0.118092,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  } as any);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    const location: any = await LocationUtil.getCurrentAsync();
    setSelectedLocation(location);
    setRegion({
      ...region,
      latitude: location.latitude,
      longitude: location.longitude,
    });
    mapRef.current.animateToRegion &&
      mapRef.current.animateToRegion(
        { latitude: location.latitude, longitude: location.longitude },
        1000,
      );
  };

  useEffect(() => {
    apiUrls.API_SEARCH_NEAR_BY_PLACES(region.latitude, region.longitude);
  }, [region]);

  const search = () => {
    NavigationService.navigate(AppStackC.SEARCH_PLACE_SCREEN, {
      onSelectPlace: onSelectPlace,
    });
  };

  const onSelectPlace = (_place: any) => {
    setSearchPlace(_place);
    setRegion({
      ...region,
      latitude: _place.geometry.location.lat,
      longitude: _place.geometry.location.lng,
    });
  };

  const setMapRef = useCallback((ref: any) => {
    if (ref) {
      mapRef.current = ref;
    }
  }, []);

  return (
    <>
      <View style={styles.root}>
        <MapView ref={setMapRef} style={styles.map} showsUserLocation region={region} />
        <View style={styles.vwParent}>
          <View style={styles.vwLeft}>
            <IconButton
              color={R.color.primary}
              size="sm"
              type={'Feather'}
              name={'map'}
              shape={'circle'}
              wrapperStyles={styles.vwCircle}
              onPress={() => setLocalDataModal(!isVisibleLocalDataModal)}
            />
            <IconButton
              color={R.color.primary}
              size="sm"
              type={'Feather'}
              name={'search'}
              shape={'circle'}
              gutterLeft={15}
              wrapperStyles={styles.vwCircle}
              onPress={() => search()}
            />
          </View>
          {selectedLocation && selectedLocation.city ? (
            <View style={[styles.vwMiddle, { backgroundColor: R.color.white }]}>
              <Text variant="title2" numberOfLines={1}>
                {search_place && search_place.place_id
                  ? `${search_place.city_info.city}`
                  : `${selectedLocation.city}`}
              </Text>
            </View>
          ) : (
            <View style={styles.vwMiddle} />
          )}
          <View style={styles.vwRight}>
            <IconButton
              color={R.color.gray4}
              size="md"
              type={'FontAwesome'}
              name={'user-circle-o'}
              shape={'circle'}
              wrapperStyles={styles.vwCircle}
            />
          </View>
        </View>
        {search_place && search_place.place_id && <PlaceInfo place={search_place} />}
      </View>
      <LocalModal isVisibleModal={isVisibleLocalDataModal} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: R.color.white,
  },
  map: {
    width: R.unit.windowWidth(1),
    height: R.unit.windowHeight(1),
  },
  vwParent: {
    flex: 3,
    width: R.unit.windowWidth(1),
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 99999,
    alignItems: 'center',
    top: R.unit.scale(45),
    paddingHorizontal: R.unit.scale(15),
    paddingVertical: R.unit.scale(5),
    justifyContent: 'space-evenly',
  },
  vwCircle: {
    width: R.unit.scale(40),
    height: R.unit.scale(40),
    backgroundColor: R.color.white,
  },
  vwLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vwMiddle: {
    flex: 2,
    paddingHorizontal: R.unit.scale(10),
    borderRadius: R.unit.scale(5),
    paddingVertical: R.unit.scale(5),
    marginHorizontal: R.unit.scale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  vwRight: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default HomeContainer;
