import toastService from '@app/util/toast';
import axios, { axiosNT, axiosNL, axiosNTL } from './axios';
import NavigationService from '@app/navigation/NavigationService';
import { NavigationStackC } from '@app/constants/navigation';
import store from '@app/store';
import { logoutRequest } from '@app/store/auth/authSlice';

const axiosInterceptor = (dispatch: any) => {
  //request interceptors
  function commonRequest(request: any) {
    try {
      const authToken = store.getState().auth.data.access_token;
      if (!authToken) {
        return request;
      }
      request.headers['Authorization'] = `Bearer ${authToken}`;
    } catch (ex) {}
    return request;
  }

  async function commonResponse(response: any) {
    // console.log({response})
    if (!response) {
      //show alert
      return;
    }

    // set message to toast service
    if (response.data && response.data.code == -1) {
      toastService.show(response.data.message);
    }

    //got response success
    if (response.status == 400) {
      // TODO: Add handling for bad request
    }

    if (response.status == 401) {
      //logout functionality need to written
      dispatch(logoutRequest());
      setTimeout(() => {
        NavigationService.navigate(NavigationStackC.AUTH_STACK);
      }, 2000);
      return;
    }

    //got response success
    if (response.data.status !== 1) {
      // TODO: Add handling for invalid response
    }
  }

  function showToast(response: any) {
    if (response.data && response.data.message) {
      toastService.show(response.data.message);
    } else if (
      response.data &&
      // response.data.code === 200 &&
      response.data.response &&
      response.data.response.detail
    ) {
      toastService.show(response.data.response.detail);
    } else if (
      response.data &&
      // response.data.code === 200 &&
      response.data.response &&
      response.data.response.constructor == String
    ) {
      toastService.show(response.data.response);
    } else if (
      response.data &&
      response.data.res &&
      // response.data.res.code === 200 &&
      response.data.res.response &&
      response.data.res.response.detail
    ) {
      toastService.show(response.data.res.response.detail);
    } else if (
      response.data &&
      response.data.res &&
      // response.data.res.code === 200 &&
      response.data.res.response &&
      response.data.res.response.constructor == String
    ) {
      toastService.show(response.data.res.response.detail);
    }
  }

  axios.interceptors.request.use(async (request) => {
    //show loader
    //showLoader(request);
    request = await commonRequest(request);
    return request;
  });

  axiosNT.interceptors.request.use(async (request) => {
    //show loader
    //showLoader(request);

    request = await commonRequest(request);
    return request;
  });

  axiosNL.interceptors.request.use(async (request) => {
    request = await commonRequest(request);

    return request;
  });

  axiosNTL.interceptors.request.use(async (request) => {
    request = await commonRequest(request);
    return request;
  });

  //response interceptors
  axios.interceptors.response.use(
    (response: any) => {
      //hide loader
      //hideLoader(response);
      if (!response.data) {
        return response;
      }
      //hide loader
      commonResponse(response);

      //show toast
      showToast(response);

      // Do something with response data
      return response;
    },
    (error) => {
      console.log('Api Error', { error });
      //hide loader
      commonResponse(error.response);

      // Do something with response error
      return Promise.reject(error);
    },
  );

  axiosNT.interceptors.response.use(
    (response) => {
      //hide loader
      //hideLoader(response);

      if (!response.data) {
        return response;
      }

      commonResponse(response);

      // Do something with response data
      return response.data;
    },
    (error) => {
      //hide loader
      commonResponse(error.response);

      // Do something with response error
      return Promise.reject(error);
    },
  );

  axiosNL.interceptors.response.use(
    (response: any) => {
      if (!response.data) {
        return response;
      }

      commonResponse(response);

      //show toast
      showToast(response);

      // Do something with response data
      return response.data;
    },
    (error) => {
      commonResponse(error.response);

      // Do something with response error
      return Promise.reject(error);
    },
  );

  axiosNTL.interceptors.response.use(
    (response) => {
      if (!response.data) {
        return response;
      }

      commonResponse(response);

      // Do something with response data
      return response.data;
    },
    (error) => {
      commonResponse(error.response);
      // Do something with response error
      return Promise.reject(error);
    },
  );
};

export default axiosInterceptor;
