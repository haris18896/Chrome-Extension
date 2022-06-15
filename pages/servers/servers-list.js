import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Input } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

function Servers() {
  const router = useRouter()
  const [searchKeyword, setSearchKeyword] = useState('')

  const onChangeHandler = e => {
    const { name, value } = e.target
    if (name === 'searchKeyword') setSearchKeyword(value)
  }

  console.log('search..', searchKeyword)

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
      <div className='Servers--tabs'></div>
      <div className='Servers--list'>c</div>
    </div>
  )
}

export default Servers
