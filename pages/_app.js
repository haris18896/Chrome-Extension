import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import { wrapper } from '../redux/store'
import { Suspense, useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Spinner from '../components/common/Spinner'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', url => {
    NProgress.start(url)
  })
  Router.events.on('routeChangeComplete', url => {
    NProgress.done(url)
  })

  return (
    <ErrorBoundary fallback={'ErrorFallback'}>
      <Suspense fallback={<Spinner />}>
        <div>
          <Component {...pageProps} />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default wrapper.withRedux(MyApp)
