import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import jwt_decode from 'jwt-decode'

import { wrapper } from '../redux/store'
import { useDispatch } from 'react-redux'
import { Suspense, useEffect } from 'react'

import useJwt from '../jwt/jwtService'
import Spinner from '../components/common/spinner'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

import { SET_IS_ACCOUNT_TRUE, SET_LOGGED_IN_USER, USER_LOGGED_IN_SUCCESS } from '../redux/action/actionTypes/customer'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (useJwt.getToken()) {
      const token = useJwt.getToken()
      const decode = jwt_decode(token)
      dispatch({ type: SET_LOGGED_IN_USER, payload: decode })
      dispatch({ type: USER_LOGGED_IN_SUCCESS, payload: decode })
    }

    if (localStorage.getItem('isRegistered')) dispatch({ type: SET_IS_ACCOUNT_TRUE })
  }, [])

  Router.events.on('routeChangeStart', url => {
    NProgress.start(url)
  })
  Router.events.on('routeChangeComplete', url => {
    NProgress.done(url)
  })

  return (
    <ErrorBoundary fallback={'ErrorFallback'}>
      <Suspense fallback={<Spinner />}>
        <Component {...pageProps} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default wrapper.withRedux(MyApp)
