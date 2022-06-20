import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { batchedSubscribe } from 'redux-batched-subscribe'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { getCustomerProfileReducer, loginReducer } from './reducer/Auth/authReducer'

const rootReducer = combineReducers({
  auth: loginReducer,
  profile: getCustomerProfileReducer
})

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
}

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const store = () =>
  configureStore({
    reducer: masterReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([thunk, logger]),
    preloadedState
  })

export const wrapper = createWrapper(store)
