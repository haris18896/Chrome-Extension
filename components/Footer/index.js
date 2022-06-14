import React from 'react'
import Image from 'next/image'

import clock from '../../public/assets/logos/clock.svg'
import shield from '../../public/assets/logos/shield.svg'
import premium from '../../public/assets/logos/premium.svg'
import autoRenewal from '../../public/assets/logos/autoRenewal.svg'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer__renewal'>
        <div className='Footer__renewal--premium'>
          <Image src={premium} alt='premium' width={87} height={22} />
        </div>
        <div className='Footer__renewal--autoRenewal'>
          <div className='Footer__renewal--autoRenewal__text'>
            <Image src={autoRenewal} alt='autoRenewal' width={12} height={12} />
            <p>Auto Renewal</p>
          </div>
          <div className='Footer__renewal--autoRenewal__text' style={{ marginBottom: '15px' }}>
            <Image src={clock} alt='clock' width={12} height={12} />
            <p>10-12-2022 11:59 (29 days)</p>
          </div>
        </div>
        <div className='Footer__renewal--time'></div>
      </div>

      <div className='Footer__shield'>
        <Image src={shield} alt='shield' height={47} width={39} />
      </div>
    </div>
  )
}

export default Footer
