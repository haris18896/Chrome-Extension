import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

function Layout({ children }) {
  const router = useRouter()
  return (
    <div className='Layout'>
      {['/connect/connect'].includes(router.pathname) ? <Header /> : ''}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
