import React from 'react'
import Image from 'next/image'

import user from '../../public/assets/logos/user.svg'
import setting from '../../public/assets/logos/setting.svg'
import star from '../../public/assets/logos/star.svg'
import info from '../../public/assets/logos/info.svg'

export const SidebarData = [
  {
    title: 'My account',
    path: '/',
    icon: <Image src={user} alt='user' width={16} height={16} />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/',
    icon: <Image src={setting} alt='setting' width={16} height={16} />,
    cName: 'nav-text'
  },
  {
    title: 'Rate Us',
    path: '/',
    icon: <Image src={star} alt='star' width={16} height={16} />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/',
    icon: <Image src={info} alt='info' width={16} height={16} />,
    cName: 'nav-text'
  }
]
