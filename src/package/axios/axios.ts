import * as coreAxios from 'axios';
import getEnv from '@app/config/environment';

const axios = coreAxios.default.create({
  baseURL: getEnv().ROOT_URL,
});

//no toast
export const axiosNT = coreAxios.default.create({
  baseURL: getEnv().ROOT_URL,
});

//no global loader
export const axiosNL = coreAxios.default.create({
  baseURL: getEnv().ROOT_URL,
});

//no global loader and toast
export const axiosNTL = coreAxios.default.create({
  baseURL: getEnv().ROOT_URL,
});

export default axios;
