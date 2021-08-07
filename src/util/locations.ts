/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Location from 'expo-location';

const getCurrentAsync = async () => {
  let region: any = {};
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return {
        latitude: 51.509865,
        longitude: -0.118092,
      };
    }

    let location = await Location.getCurrentPositionAsync();

    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      city: '',
      country: '',
      isoCountryCode: '',
      name: '',
      postalCode: '',
      region: '',
      street: '',
    };

    let l2 = await Location.reverseGeocodeAsync(region);
    if (l2 && l2.length > 0) {
      region = {
        ...region,
        ...l2[0],
      };
    }
  } catch (e) {
    return e;
  }

  return region;
};

const getLocationDetail = async (latitude: any, longitude: any) => {
  let region: any = {};
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return {
      latitude: 0,
      longitude: 0,
    };
  }

  let l2 = await Location.reverseGeocodeAsync({
    latitude: latitude,
    longitude: longitude,
  });
  if (l2 && l2.length > 0) {
    region = {
      ...region,
      ...l2[0],
    };
  }

  return region;
};

export default {
  getCurrentAsync,
  getLocationDetail,
};
