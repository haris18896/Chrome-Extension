import { GET_CUSTOMER_PROFILE_FAILURE, GET_CUSTOMER_PROFILE_INIT, GET_CUSTOMER_PROFILE_SUCCESS } from '../actionTypes/Auth'

export const initiateGetProfile = () => ({ type: GET_CUSTOMER_PROFILE_INIT })
export const getProfileSuccess = data => ({ type: GET_CUSTOMER_PROFILE_SUCCESS, payload: data })
export const getProfileFailed = error => ({ type: GET_CUSTOMER_PROFILE_FAILURE, payload: error })

export const handleGetProfile = () => {
  return async dispatch => {
    dispatch(initiateGetProfile())
    console.log('fetch profile initiated....')
    try {
      const response = await useJwt.getProfile()
      if (response) {
        dispatch(getProfileSuccess(response.data))
        console.log('profile fetched successfully...')
      }
    } catch (err) {
      if (err.response) {
        dispatch(getProfileFailed(err.response.data))
        console.log('get profile failed.....')
      }
    }
  }
}
