import { MAIN_SERVICE_URL } from './consts/index'

const apiEndPoints = {
  typeJWT: 'JWT',
  typeBearer: 'Bearer',
  storageTokenKeyName: 'accessToken',
  loginEndpoint: `${MAIN_SERVICE_URL}/vpn/customer/loginCustomer`
}

export default apiEndPoints
