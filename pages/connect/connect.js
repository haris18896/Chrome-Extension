import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

import { useRouter } from 'next/router'

import Layout from '../../Layout'

import flag from '../../public//assets/flag.svg'
import connected from '../../public/assets/logos/connected.svg'
import rightArrow from '../../public/assets/logos/rightArrow.svg'
import disconnected from '../../public/assets/logos/disconnected.svg'

function Connect() {
  const router = useRouter()
  const [connection, setConnection] = useState(false)
  const [ip, setIP] = useState('')
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Layout>
      <div className='Connect'>
        <div className='Connect__connection' onClick={() => setConnection(!connection)}>
          {connection ? (
            <div>
              <Image src={connected} alt='connected' width={184} height={268} />
              <p className='Connect__connection--connected'>Connected</p>
            </div>
          ) : (
            <div>
              <Image src={disconnected} alt='disconnected' width={184} height={268} />
              <p className='Connect__connection--disconnect'>Disconnected</p>
            </div>
          )}
        </div>

        <div className='Connect__Button'>
          <div className='Connect__Button--container' onClick={() => router.push('/servers/servers')}>
            <Image className='Connect__Button--container__flag' src={flag} alt='flag' width={30} height={30} />
            <p>United States of America</p>
            <Image src={rightArrow} alt='rightArrow' width={15} height={20} />
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
