import config from '../config';
import {_getData, _removeData} from '../localStorage';
import * as RootNavigation from '../../RootNavigation.js';

import axios from 'axios';
import {throttle} from 'throttle-debounce';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import crashlytics from '@react-native-firebase/crashlytics';
// import analytics from '@react-native-firebase/analytics';

//Private API instance
const privateApi = axios.create();
const initPrivateAPI = async () => {
  let token = await _getData('token');
  if (token) {
    privateApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  privateApi.defaults.baseURL = config.URL;
  privateApi.defaults.headers.common['Accept-encoding'] = 'gzip';
};
initPrivateAPI();
privateApi.interceptors.request.use(
  function (config) {
    if (!privateApi.defaults.headers.common['Authorization']) {
      return Promise.reject({code: 'E9501', message: 'general_err'});
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Public API instance
const publicApi = axios.create();
const initPublicAPI = async () => {
  publicApi.defaults.baseURL = config.URL;
  publicApi.defaults.headers.common['Accept-encoding'] = 'gzip';
};
initPublicAPI();
publicApi.interceptors.response.use(
  function (response) {
    const loginAPI = ['/public/v1/login', '/oauth/login/google'];
    if (loginAPI.includes(response?.config?.url)) {
      // update private api header instance on login event
      let token = response?.data?.token;
      if (token) {
        privateApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//Send requests using the created instance
const refreshToken = async () => {
  let refreshToken = _getData('refresh_token');
  return refreshToken;
};

async function postPublic(url, param) {
  let data = new URLSearchParams(param);

  try {
    let response = await publicApi.post(url, data.toString());
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response, true)
      : Promise.reject({code: 'E9501', message: 'general_err'});
  }
}
async function postPrivate(url, param, token_fcm = null) {
  let data = new URLSearchParams(param);
  let privateHeader = {};
  if (!!token_fcm) {
    privateHeader = {
      'X-User-D': `${token_fcm}`,
      'X-User-G': 1,
    };
  }
  try {
    let response = await privateApi.post(url, data.toString(), {
      headers: privateHeader,
    });
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response, true)
      : Promise.reject('general_err');
  }
}
const getPublic = async url => {
  try {
    let response = await publicApi.get(url);
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response)
      : Promise.reject({code: 'E9501', message: 'general_err'});
  }
};
const getPrivate = async (url, token_fcm) => {
  let privateHeader = {};
  if (!!token_fcm) {
    privateHeader = {
      ...(token_fcm ? {'X-User-D': `${token_fcm}`} : {}),
      ...(token_fcm ? {'X-User-G': 1} : {}),
    };
  }

  try {
    let response = await privateApi.get(url, {headers: privateHeader});
    return response?.data;
  } catch (error) {
    return error.response
      ? handleResponse(error.response, true)
      : Promise.reject({code: 'E9501', message: 'general_err'});
  }
};

export const LogoutMe = async navigateTo => {
  console.log('executed');
  try {
    GoogleSignin.configure({});
    let isSignIn = await GoogleSignin.isSignedIn();
    delete privateApi.defaults.headers.common['Authorization'];
    if (isSignIn) {
      await Promise.all([
        GoogleSignin.signOut(),
        _removeData('token'),
        _removeData('user_id'),
      ]);
    } else {
      await Promise.all([_removeData('token'), _removeData('user_id')]);
    }
  } catch (err) {
    crashlytics().recordError(err);
  } finally {
    analytics().setUserId(null);
    if (navigateTo) {
      RootNavigation.navigate(navigateTo, {
        payload: {origin: 'system'},
      });
    }
  }
};

const throttleLogoutMe = throttle(
  1000,
  () => {
    LogoutMe();
  },
  {noLeading: false, noTrailing: false},
);
async function handleResponse(response, privateRoute = false) {
  let data = await response?.data;
  try {
    if (!response.ok) {
      if ([401, 403].includes(response.status) && privateRoute) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        return throttleLogoutMe();
        // return Promise.reject({code: 'E9501', message: response.status});
      }

      if (!response?.headers['content-type'].includes('application/json')) {
        return Promise.reject({code: 'E9501', message: response.status});
      }
      const error = data || response.statusText;
      return Promise.reject(error);
    }
  } catch (error) {
    console.error(`handleResponse : ${error}`);
    return Promise.reject({code: 'E9501', message: 'general_err'});
  }

  return data;
}
export const fetchWrapper = {
  getPrivate,
  getPublic,
  postPrivate,
  postPublic,
};
