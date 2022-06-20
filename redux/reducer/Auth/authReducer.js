import {
  CLEAR_LOGIN_STATE,
  LOGOUT_SUCCESS,
  USER_LOGGED_IN_FAILURE,
  USER_LOGGED_IN_INIT,
  GET_CUSTOMER_PROFILE_FAILURE,
  GET_CUSTOMER_PROFILE_INIT,
  GET_CUSTOMER_PROFILE_SUCCESS,
  USER_LOGGED_IN_SUCCESS
} from '../../action/actionTypes/Auth'

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_INIT:
      return { inProcess: true }
    case USER_LOGGED_IN_SUCCESS:
      return { ...state, inProcess: false, success: true, msg: 'Sign In Successful!' }
    case USER_LOGGED_IN_FAILURE:
      return { ...state, inProcess: false, error: action.payload }
    case CLEAR_LOGIN_STATE:
      return {}
    case LOGOUT_SUCCESS:
      return {}
    default:
      return state
  }
}

export const getCustomerProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMER_PROFILE_INIT:
      return { inProcess: true }
    case GET_CUSTOMER_PROFILE_SUCCESS:
      return { ...state, inProcess: false, profile: action.payload.profile }
    case GET_CUSTOMER_PROFILE_FAILURE:
      return { ...state, inProcess: false, error: action.payload }
    default:
      return state
  }
}
