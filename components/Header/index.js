import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import bars from '../../public/assets/logos/bars.svg'
import friendsVPN from '../../public/assets/logos/friendsVPN.svg'

function Header() {
  return (
    <div className='Header'>
      <div
        className='Header--bars'
        onClick={e => {
          e.preventDefault()
          console.log('navbar')
        }}
      >
        <Image src={bars} alt='bars' height={20} width={21} />
      </div>
      <div className='Header--logo'>
        <Link href='/'>
          <a className='Header--logo'>
            <Image src={friendsVPN} alt='friendsVPN' height={24} width={120} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
