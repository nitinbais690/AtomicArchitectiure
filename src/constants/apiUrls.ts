import appConst from '@app/constants/constant';

const API_SEARCH_NEAR_BY_PLACES = (latitude: string, longitude: string) =>
  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${appConst.SEARCH_RADIUS}&key=${appConst.GOOGLE_KEY}&keyword=police,hospital`;
//AIzaSyC-RqRmo81hcmWMWHye9VJbqBevxNop0Q4
export default {
  API_SEARCH_NEAR_BY_PLACES,
};
