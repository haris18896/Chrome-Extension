import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import { Offcanvas } from 'react-bootstrap'

import bars from '../../public/assets/logos/bars.svg'
import person from '../../public/assets/logos/person.svg'
import friendsVPN from '../../public/assets/logos/friendsVPN.svg'

import { FaStar } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'
import { TbLogout } from 'react-icons/tb'
import { MdCancel } from 'react-icons/md'

function Header() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const listItems = [
    {
      name: 'My Account',
      href: '/my-account',
      icon: <FaUserAlt size={16} />
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <BsGearFill size={16} />
    },
    {
      name: 'Rate Us',
      href: '/rating',
      icon: <FaStar size={16} />
    },
    {
      name: 'About Us',
      href: '/about-us',
      icon: <FaInfoCircle size={16} />
    }
  ]

  const footer = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/',
      icon: <FaFacebookSquare size={28} color='white' />
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/',
      icon: <FaTwitter size={28} color='white' />
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/',
      icon: <FaInstagram size={28} color='white' />
    }
  ]

  return (
    <div
      className={classNames({
        Header: true
      })}
    >
      <div onClick={handleShow} className='Header--bars'>
        {' '}
        <Image src={bars} alt='bars' height={20} width={21} />
      </div>
      <div className='Header--logo'>
        <Link href='/'>
          <a className='Header--logo'>
            <Image src={friendsVPN} alt='friendsVPN' height={24} width={120} />
          </a>
        </Link>
      </div>{' '}
      <Offcanvas className='Header__offCanvas' show={show} onHide={handleClose}>
        <div className='Header__offCanvas--close'>
          <MdCancel size={32} color='primary' />
        </div>
        <Offcanvas.Body className='Header__Body'>
          <div className='Header__Body--Top'>
            <Image src={person} alt='person' height={66} width={66} />
            <p className='Header__Body--Top__name'>Haris Ahmad Khan</p>
            <p className='Header__Body--Top__email'>haris18896@gmail.com</p>
          </div>

          <div className='Header__Body--List'>
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <a>
                      <span className='Header__Body--List__icons'>{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='Header__Body--List__logout'>
              <Link href='/logout'>
                <a>
                  <TbLogout size={24} />
                  <span>Logout</span>
                </a>
              </Link>
            </div>
          </div>

          <div className='Header__Body--footer'>
            <ul>
              {footer.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <a target='__blank'>{item.icon}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header
