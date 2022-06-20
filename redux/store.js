// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import debounce from 'lodash.debounce';
import { createWrapper } from 'next-redux-wrapper';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { vpnServerCountriesReducer } from './reducer/servers';
import { getCustomerProfileReducer, loginReducer } from './reducer/Auth/authReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
  profile: getCustomerProfileReducer,
  servers: vpnServerCountriesReducer
});

const preloadedState = {
  auth: {
    inProcess: false,
    success: false,
    error: null
  },
  profile: {
    name: 'User Name',
    email: 'User Email'
  }
};

const debounceNotify = debounce(notify => notify());

export const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([thunk]),
  enhancers: [batchedSubscribe(debounceNotify)],
  devTools: process.env.NODE_ENV !== 'production'
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
