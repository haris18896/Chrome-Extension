/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from 'react'
import NProgress from 'nprogress'
import dynamic from 'next/dynamic'
import classNames from 'classnames'

import { useAmp } from 'next/amp'
import { useDispatch, useSelector } from 'react-redux'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import { handleAnonymousLogin } from '../../redux/action/Auth/anonymousAuthAction'

NProgress.configure({ showSpinner: false })

function index() {
  const isAmp = useAmp()
  const dispatch = useDispatch()
  const ref = useRef(document.getElementById('setProxy'))
  const { inProcess } = useSelector(state => state.anonymous)

  const [ip, setIP] = useState(null)
  const [loading, setLoading] = useState(false)
  const CountryServer = dynamic(() => import('../countryServer/index'), { ssr: false })

  useEffect(() => {
    'use strict'
    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
      return
    }
    // Listen to messages from service workers.
    navigator.serviceWorker.addEventListener('connected', function (event) {
      console.log('Got replay from service worker : ', event.data)
    })

    // Are we being controlled?
    if (navigator.serviceWorker.controller) {
      // Yes, send our controller a message
      // const data = () => {
      //   if (ref.current.alt === 'connected') {
      //     ref.current.onclick(() => {
      //       var config = {
      //         mode: 'pac_script',
      //         pacScript: {
      //           data:
      //             'function FindProxyForURL(url, host) {\n' +
      //             "  if (host == 'www.google.com')\n" +
      //             "    return 'PROXY 119.152.152.163:80';\n" +
      //             "  return 'DIRECT';\n" +
      //             '}',
      //         },
      //       }

      //       chrome.proxy.settings.set({ value: config, scope: 'regular' }, function () {
      //         console.log('Proxy settings applied.')
      //       })
      //     })
      //   } else if (ref.current.alt === 'disconnected') {
      //     ref.current.onclick(() => {
      //       chrome.proxy.settings.set({ value: { mode: 'direct' }, scope: 'regular' }, function () {
      //         console.log('Proxy settings Reset.')
      //       })
      //     })
      //   }
      // }
      console.log('sending Hi to controller')
      navigator.serviceWorker.controller.postMessage(data)
    } else {
      navigator.serviceWorker
        .register('/backgroundScript.js')
        .then(registration => {
          console.log('Service worker registered, scope: ', registration.scope)
          console.log('Refresh the page to talk to it.')
        })
        .catch(err => {
          console.log('service worker registration failed : ', err.message)
        })
    }
  })

  const [connection, setConnection] = useLocalStorage('connection', {
    status: 'disconnected',
    img: '/assets/logos/disconnected.svg',
  })

  useEffect(() => {
    if (localStorage.getItem('connection')) {
      setConnection(JSON.parse(localStorage.getItem('connection')))
    }
  }, [])

  const handleChange = () => {
    if (connection.status === 'disconnected') {
      setConnection({
        status: 'connected',
        img: '/assets/logos/connected.svg',
      })
    } else if (connection.status === 'connected') {
      setConnection({
        status: 'disconnected',
        img: '/assets/logos/disconnected.svg',
      })
    }
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://geolocation-db.com/json/86f5f280-f4eb-11ec-8676-4f4388bc6daa')
      .then(res => res.json())
      .then(data => {
        setIP(data.IPv4)
        setLoading(false)
      })
  }, [connection])

  useEffect(() => {
    const visitor = localStorage.getItem('visitor')
    dispatch(handleAnonymousLogin({ deviceId: `${visitor}` }))
  }, [])

  useEffect(() => {
    if (inProcess) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [inProcess])

  return (
    <>
      {connection && (
        <div className='Connect'>
          <div className='Connect__connection' onClick={() => handleChange()}>
            <div>
              {isAmp ? (
                <amp-img
                  ref={ref}
                  id={connection?.status === 'connected' ? 'setProxy' : 'unsetProxy'}
                  width='184'
                  height='268'
                  src={connection?.img}
                  alt={connection?.status === 'connected' ? 'connected' : 'disconnected'}
                  layout='responsive'
                />
              ) : (
                <img
                  ref={ref}
                  id={connection?.status === 'connected' ? 'setProxy' : 'unsetProxy'}
                  width='184'
                  height='268'
                  src={connection?.img}
                  alt={connection?.status === 'connected' ? 'connected' : 'disconnected'}
                />
              )}
              <p
                className={classNames({
                  'Connect__connection--connected': connection?.status === 'connected',
                  'Connect__connection--disconnected': connection?.status === 'disconnected',
                })}
              >
                {connection?.status}
              </p>
            </div>
          </div>

          <div className='Connect__Button'>
            <CountryServer />
            {connection?.status === 'connected' ? (
              <div className='Connect__Button--ipAddress'>
                <p>IP Address: {loading ? 'Loading...' : !ip ? '00.00.00.00' : ip}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default index