import axios from 'axios';

/**
 * HTTP_OK will help us check the API success or not
 */
export const HTTP_OK = 200

export const SERVER_ERROR = 500

/**
 * SUCCESS is server success status to check whether the data fetch succeed or not
 */
export const SUCCESS = "Success"

export const appApi = axios.create({
  baseURL: 'https://datastore-staging-tvpass.azureedge.net/content/',
});

appApi.interceptors.request.use(
  config => {
    console.log('Request', config.baseURL + '' + config.url);

    return config;
  },
  error => {
    console.log("Request Error", error);
    return Promise.reject(error);
  },
);

appApi.interceptors.response.use(
  response => {
    // console.log('Response', response.data);
    return response;
  },
  error => {
    console.log('Response Error', error.status)
    return Promise.reject(error);
  },
);

export default appApi