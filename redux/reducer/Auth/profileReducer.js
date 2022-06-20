import {
  GET_CUSTOMER_PROFILE_FAILURE,
  GET_CUSTOMER_PROFILE_INIT,
  GET_CUSTOMER_PROFILE_SUCCESS
} from '../../action/actionTypes/Auth'

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
