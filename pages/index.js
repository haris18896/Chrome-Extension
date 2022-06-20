/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';

import Layout from '../Layout';

function Connect() {
  const isAmp = useAmp();
  const router = useRouter();

  const [connection, setConnection] = useState(false);
  const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

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
            {isAmp ? (
              <amp-img width='30' height='30' src='/assets/flag.svg' alt='flag' layout='responsive' />
            ) : (
              <img width='30' height='30' src='/assets/flag.svg' alt='flag' />
            )}
            <p>United States of America</p>
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
  );
}

export default Connect;
