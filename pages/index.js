/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useLayoutEffect } from 'react'

import axios from 'axios'
import Layout from '../Layout'
import NProgress from 'nprogress'
import { useAmp } from 'next/amp'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { handleAnonymousLogin } from '../redux/action/Auth/anonymousAuthAction'
import ReactCountryFlag from 'react-country-flag'
import { useLocalStorage } from '../hooks/useLocalStorage'

NProgress.configure({ showSpinner: false })

function Connect() {
  const isAmp = useAmp()
  const router = useRouter()
  const dispatch = useDispatch()
  const { inProcess } = useSelector(state => state.anonymous)

  const [selectedServer, setSelectedServer] = useLocalStorage('selectedServer', {})

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

  useEffect(() => {
    if (localStorage.getItem('selectedServer')) {
      setSelectedServer(JSON.parse(localStorage.getItem('selectedServer')))
    }
  }, [])

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
          <div className='Connect__Button--container' onClick={() => router.push('/servers?amp=1')}>
            {selectedServer && (
              <div>
                <ReactCountryFlag
                  as='div'
                  countryCode={selectedServer?._id}
                  style={{
                    width: '2em',
                    height: '2em',
                    borderRadius: '50%',
                  }}
                  svg
                  cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
                  cdnSuffix='svg'
                  title='United States'
                />
                <p>{selectedServer?.name || 'Choose Country Server'}</p>
              </div>
            )}

            {isAmp ? (
              <amp-img width='15' height='20' src='/assets/logos/rightArrow.svg' alt='rightArrow' layout='responsive' />
            ) : (
              <img width='15' height='20' src='/assets/logos/rightArrow.svg' alt='rightArrow' />
            )}
          </div>
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
