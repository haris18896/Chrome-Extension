/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

import { useAmp } from 'next/amp'
import { useDispatch, useSelector } from 'react-redux'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import NProgress from 'nprogress'
import { handleAnonymousLogin } from '../../redux/action/Auth/anonymousAuthAction'
NProgress.configure({ showSpinner: false })

function index() {
  const isAmp = useAmp()
  const dispatch = useDispatch()
  const { inProcess } = useSelector(state => state.anonymous)

  const CountryServer = dynamic(() => import('../countryServer/index'), {
    ssr: false,
  })

  const [ip, setIP] = useState(null)
  const [loading, setLoading] = useState(false)
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
                <amp-img width='184' height='268' src={connection?.img} alt='connected' layout='responsive' />
              ) : (
                <img width='184' height='268' src={connection?.img} alt='connected' />
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
