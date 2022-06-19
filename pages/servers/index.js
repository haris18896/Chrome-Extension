import React, { useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import Layout from '../../Layout'
import { Input } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import ServersList from '../../components/servers/ServersList'

function Servers() {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = useState('')
  const [favorite, setFavorite] = useState([
    {
      id: 1,
      name: 'PK',
      flag: '/assets/flags/pk.svg',
      ping: '70ms'
    }
  ])

  const allServers = [
    {
      id: 1,
      name: 'PK',
      flag: '/assets/flags/pk.svg',
      ping: '80ms'
    },
    {
      id: 2,
      name: 'us',
      flag: '/assets/flags/us.svg',
      ping: '120ms'
    },
    {
      id: 3,
      name: 'ar',
      sub: 'Premium',
      flag: '/assets/flags/ar.svg',
      ping: '140ms'
    },
    {
      id: 4,
      name: 'bq',
      sub: 'Premium',
      flag: '/assets/flags/bq.svg',
      ping: '60ms'
    },
    {
      id: 5,
      sub: 'Premium',
      name: 'bw',
      flag: '/assets/flags/bw.svg',
      ping: '90ms'
    },
    {
      id: 6,
      sub: 'Premium',
      name: 'cu',
      flag: '/assets/flags/cu.svg',
      ping: '98ms'
    },
    {
      id: 7,
      sub: 'Premium',
      name: 'fj',
      flag: '/assets/flags/fj.svg',
      ping: '123ms'
    },
    {
      id: 8,
      name: 'eu',
      flag: '/assets/flags/eu.svg',
      ping: '321ms'
    },
    {
      id: 9,
      sub: 'Premium',
      name: 'gd',
      flag: '/assets/flags/gd.svg',
      ping: '123ms'
    },
    {
      id: 10,
      sub: 'Premium',
      name: 'lb',
      flag: '/assets/flags/lb.svg',
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
    const newFavorite = [...favorite]
    const index = newFavorite.findIndex(item => item.id === server.id)

    if (selectedTab.id === 'all_servers') {
      if (index === -1) {
        newFavorite.push(server)
      } else {
        newFavorite.splice(index, 1)
      }
    } else if (selectedTab.id === 'favorites') {
      if (index !== -1) {
        newFavorite.splice(index, 1)
      }
    }

    setFavorite(newFavorite)
  }

  const reset = () => {
    setSearchKeyword('')
  }

  return (
    <Layout title='Servers'>
      <div className='Servers'>
        <div className='Servers--header'>
          <HiOutlineArrowNarrowLeft
            className='Servers--header__goBack'
            color='secondary'
            size={24}
            onClick={() => router.back()}
          />
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
                <ServersList key={index} flag={item.flag} name={item.name} ping={item.ping} sub={item.sub}>
                  <FaRegStar
                    size={16}
                    className={classNames({
                      'Servers--list__servers--ping--star': favorite.find(doc => doc.id === item.id)
                    })}
                    onClick={() => {
                      handleFavorite(item)
                    }}
                  />
                </ServersList>
              ))}
            </div>
          ) : selectedTab.id === 'favorites' ? (
            <div>
              {(favorite.length &&
                favorite.map((item, index) => (
                  <ServersList key={index} flag={item.flag} name={item.name} ping={item.ping} sub={item.sub}>
                    <FaStar size={16} color='ffc10b' onClick={() => handleFavorite(item)} />
                  </ServersList>
                ))) || <p>No favorites yet</p>}
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  )
}

export default Servers
