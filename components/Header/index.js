import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import bars from '../../public/assets/logos/bars.svg'
import friendsVPN from '../../public/assets/logos/friendsVPN.svg'

function Header() {
  return (
    <div className='Header'>
      <Image className='Header--bars' src={bars} alt='bars' height={20} width={21} />
      <Link href='/'>
        <a className='Header--logo'>
          <Image src={friendsVPN} alt='friendsVPN' height={24} width={120} />
        </a>
      </Link>
    </div>
  )
}

export default Header
