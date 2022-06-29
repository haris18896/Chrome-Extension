/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useLayoutEffect } from 'react'

import axios from 'axios'
import Layout from '../Layout'
import NProgress from 'nprogress'
import { useAmp } from 'next/amp'
import { useDispatch, useSelector } from 'react-redux'
import { handleAnonymousLogin } from '../redux/action/Auth/anonymousAuthAction'
import dynamic from 'next/dynamic'

NProgress.configure({ showSpinner: false })

function Connect() {
  const isAmp = useAmp()
  const dispatch = useDispatch()
  const { inProcess } = useSelector(state => state.anonymous)

  const CountryServer = dynamic(() => import('../components/countryServer/index'), {
    ssr: false,
  })

  const [connection, setConnection] = useState(false)
  const [ip, setIP] = useState('')
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }

  useEffect(() => {
    getData()
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
              <p>IP Address: {ip || '00.00.00.00'}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Connect
