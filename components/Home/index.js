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

  const [connection, setConnection] = useLocalStorage('connection', {
    status: 'disconnected',
    img: '/assets/logos/disconnected.svg',
  })

  useEffect(() => {
    if (localStorage.getItem('connection')) {
      setConnection(JSON.parse(localStorage.getItem('connection')))
    }
  }, [])

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

  useEffect(() => {
    'use strict'
    if (!navigator.serviceWorker || !navigator.serviceWorker.register) {
      console.log("This browser doesn't support service workers")
      return
    }

    // Listen to messages from service workers.
    navigator.serviceWorker.addEventListener('connected', function (event) {
      console.log('Got reply from service worker: ' + event.data)
    })

    // Are we being controlled?
    if (navigator.serviceWorker.controller) {
      // Yes, send our controller a message.
      console.log("Sending 'hi' to controller")
      navigator.serviceWorker.controller.postMessage('hi')
    } else {
      navigator.serviceWorker
        .register('/backgroundScript.js')
        .then(function (registration) {
          console.log('Service worker registered, scope: ' + registration.scope)
          console.log('Refresh the page to talk to it.')
        })
        .catch(function (error) {
          console.log('Service worker registration failed: ' + error.message)
        })
    }
  }, [ref?.current?.alt])

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
