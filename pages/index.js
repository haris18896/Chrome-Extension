/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useLayoutEffect } from 'react'

import Layout from '../Layout'
import NProgress from 'nprogress'
import { useAmp } from 'next/amp'
import { useDispatch, useSelector } from 'react-redux'
import { handleAnonymousLogin } from '../redux/action/Auth/anonymousAuthAction'
import dynamic from 'next/dynamic'
import useJwt from '../jwt/jwtService'
import { useLocalStorage } from '../hooks/useLocalStorage'

NProgress.configure({ showSpinner: false })

export default function Connect() {
  const isAmp = useAmp()
  const dispatch = useDispatch()
  const { inProcess } = useSelector(state => state.anonymous)

  const CountryServer = dynamic(() => import('../components/countryServer/index'), {
    ssr: false,
  })

  const [ip, setIP] = useState(null)
  const [loading, setLoading] = useState(false)
  const [connection, setConnection] = useLocalStorage('connection', false)

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
    <Layout navbar title='FriendsVPN Extension'>
      <div className='Connect'>
        <div className='Connect__connection' onClick={() => setConnection(!connection)}>
          {connection ? (
            <div>
              {isAmp ? (
                <amp-img width='184' height='268' src='/assets/logos/connected.svg' alt='connected' layout='responsive' />
              ) : (
                <img width='184' height='268' src='/assets/logos/connected.svg' alt='connected' />
              )}
              <p className='Connect__connection--connected'>Connected</p>
            </div>
          ) : (
            <div>
              {isAmp ? (
                <amp-img width='184' height='268' src='/assets/logos/disconnected.svg' alt='Friends VPN' layout='responsive' />
              ) : (
                <img width='184' height='268' src='/assets/logos/disconnected.svg' alt='Friends VPN' />
              )}
              <p className='Connect__connection--disconnect'>Disconnected</p>
            </div>
          )}
        </div>

        <div className='Connect__Button'>
          <CountryServer />
          {connection ? (
            <div className='Connect__Button--ipAddress'>
              <p>IP Address: {loading ? 'Loading...' : !ip ? '00.00.00.00' : ip}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  )
}
