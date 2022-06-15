import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../Layout'

function Servers() {
  const router = useRouter()

  return (
    <div className='Servers'>
      <div className='Servers--header'>a</div>
      <div className='Servers--tabs'>b</div>
      <div className='Servers--list'>c</div>
    </div>
  )
}

export default Servers
