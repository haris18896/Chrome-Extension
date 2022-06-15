import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Input } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

function Servers() {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = useState('')

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
          <div className='Servers--list__servers'>all servers</div>
        ) : selectedTab.id === 'favorites' ? (
          <div className='Servers--list__servers'>favorites</div>
        ) : null}
      </div>
    </div>
  )
}

export default Servers
