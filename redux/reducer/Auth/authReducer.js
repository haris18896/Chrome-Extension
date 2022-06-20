import {
  CLEAR_LOGIN_STATE,
  LOGOUT_SUCCESS,
  USER_LOGGED_IN_FAILURE,
  USER_LOGGED_IN_INIT,
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
