import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Input } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import pk from '../../public/assets/flags/pk.svg'
import us from '../../public/assets/flags/us.svg'
import ar from '../../public/assets/flags/ar.svg'
import bq from '../../public/assets/flags/bq.svg'
import bw from '../../public/assets/flags/bw.svg'
import cu from '../../public/assets/flags/cu.svg'
import fj from '../../public/assets/flags/fj.svg'
import eu from '../../public/assets/flags/eu.svg'
import gd from '../../public/assets/flags/gd.svg'
import lb from '../../public/assets/flags/lb.svg'

import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import classNames from 'classnames'

function Servers() {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = useState('')
  const [favorite, setFavorite] = useState([
    {
      id: 1,
      name: 'PK',
      flag: pk,
      ping: '70ms'
    }
  ])

  const allServers = [
    {
      id: 1,
      name: 'PK',
      flag: pk,
      ping: '80ms'
    },
    {
      id: 2,
      name: 'us',
      flag: us,
      free: 'free',
      ping: '120ms'
    },
    {
      id: 3,
      name: 'ar',
      flag: ar,
      ping: '140ms'
    },
    {
      id: 4,
      name: 'bq',
      flag: bq,
      ping: '60ms'
    },
    {
      id: 5,
      name: 'bw',
      free: 'free',
      flag: bw,
      ping: '90ms'
    },
    {
      id: 6,
      name: 'cu',
      flag: cu,
      ping: '98ms'
    },
    {
      id: 7,
      name: 'fj',
      flag: fj,
      ping: '123ms'
    },
    {
      id: 8,
      name: 'eu',
      free: 'free',
      flag: eu,
      ping: '321ms'
    },
    {
      id: 9,
      name: 'gd',
      flag: gd,
      ping: '123ms'
    },
    {
      id: 10,
      name: 'lb',
      free: 'free',
      flag: lb,
      ping: '100ms'
    }
  ]

  let tabs = [
    {
      id: 'all_servers',
      name: 'All Servers',
      default: true
    },
    {
      id: 'favorites',
      name: 'Favorites',
      default: false
    }
  ]

  const [tabsState] = useState(tabs)

  const [selectedTab, setSelectedTab] = useState({
    id: 'all_servers',
    name: 'All Servers',
    default: true
  })

  const onChangeHandler = e => {
    const { name, value } = e.target
    if (name === 'searchKeyword') setSearchKeyword(value)
  }

  const handleChangeTab = tab => {
    setSelectedTab(tab)
  }

  const handleFavorite = server => {
    server.preventDefault()
    const newFavorite = [...favorite]
    console.log(newFavorite)
  }

  const reset = () => {
    setSearchKeyword('')
  }

  return (
    <div className='Servers'>
      <div className='Servers--header'>
        <HiOutlineArrowNarrowLeft className='Servers--header__goBack' color='secondary' size={24} onClick={() => router.back()} />
        <div className='Servers--header__search'>
          <FaSearch className='Servers--header__search--searchIcon' size={15} color='gray' />
          <MdCancel className='Servers--header__search--cancelIcon' size={15} color='gray' onClick={() => reset()} />
          <Input
            className='dataTable-filter'
            type='text'
            bsSize='sm'
            placeholder='Search...'
            id='searchKeyword'
            name='searchKeyword'
            value={searchKeyword}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className='Servers--tabs'>
        {tabsState.map((doc, index) => (
          <div key={index} className='Servers--tabs__tab'>
            <p
              onClick={() => handleChangeTab(doc)}
              className={doc.id === selectedTab.id ? 'Servers--tabs__tab--selected' : 'Servers--tabs__tab--unselected'}
            >
              {doc.name}
            </p>
          </div>
        ))}
      </div>
      <div className='Servers--list'>
        {selectedTab.id === 'all_servers' ? (
          <div>
            {allServers.map((item, index) => (
              <div key={index} className='Servers--list__servers'>
                <div className='Servers--list__servers--country'>
                  <Image src={item.flag} alt={item.name} width={30} height={30} />
                  <span>{item.name}</span>
                </div>
                <div className='Servers--list__servers--ping'>
                  <FaRegStar size={16} className={classNames({})} onClick={handleFavorite} />
                  <span>{item.ping}</span>
                </div>
              </div>
            ))}
          </div>
        ) : selectedTab.id === 'favorites' ? (
          <div>
            {(favorite.length &&
              favorite.map((item, index) => (
                <div key={index} className='Servers--list__servers'>
                  <div className='Servers--list__servers--country'>
                    <Image src={item.flag} alt={item.name} width={30} height={30} />
                    <span>{item.name}</span>
                  </div>
                  <div className='Servers--list__servers--ping'>
                    <FaStar size={16} color='ffc10b' />
                    <span>{item.ping}</span>
                  </div>
                </div>
              ))) || <p>No favorites yet</p>}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Servers
