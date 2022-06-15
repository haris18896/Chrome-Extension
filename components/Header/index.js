import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import { Offcanvas } from 'react-bootstrap'

import bars from '../../public/assets/logos/bars.svg'
import person from '../../public/assets/logos/person.svg'
import friendsVPN from '../../public/assets/logos/friendsVPN.svg'

import { TbLogout } from 'react-icons/tb'
import { MdCancel } from 'react-icons/md'
import { Footer, ListItems } from './sidebarData'

function Header() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
        <span className='Header__offCanvas--close'>
          <MdCancel size={32} onClick={handleClose} />
        </span>
        <Offcanvas.Body className='Header__Body'>
          <div className='Header__Body--Top'>
            <Image src={person} alt='person' height={66} width={66} />
            <p className='Header__Body--Top__name'>Haris Ahmad Khan</p>
            <p className='Header__Body--Top__email'>haris18896@gmail.com</p>
          </div>

          <div className='Header__Body--List'>
            <ul>
              {ListItems.map((item, index) => (
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
              {Footer.map((item, index) => (
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
