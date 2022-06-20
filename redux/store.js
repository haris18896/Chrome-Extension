import thunk from 'redux-thunk';
import logger from 'redux-logger';
import debounce from 'lodash.debounce';
import { batchedSubscribe } from 'redux-batched-subscribe';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { getCustomerProfileReducer, loginReducer } from './reducer/Auth/authReducer';

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

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const batchDebounce = debounce(notify => notify());

const store = () =>
  configureStore({
    reducer: masterReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([thunk, logger]),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [batchedSubscribe(batchDebounce)],
    preloadedState
  });

export const wrapper = createWrapper(store);
