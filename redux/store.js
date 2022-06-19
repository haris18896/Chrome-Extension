import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loginReducer } from './reducer/Auth/authReducer'

const combinedReducer = combineReducers({
  auth: loginReducer
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(applyMiddleware(thunk)))
}

export const wrapper = createWrapper(initStore)
