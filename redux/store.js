import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { getCustomerProfileReducer, loginReducer } from './reducer/Auth/authReducer';
import debounce from 'lodash.debounce';

const rootReducer = combineReducers({
  auth: loginReducer,
  profile: getCustomerProfileReducer
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
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger, thunk]),
  enhancers: [batchedSubscribe(debounceNotify)],
  devTools: process.env.NODE_ENV !== 'production'
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
