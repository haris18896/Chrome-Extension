/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
import React from 'react'

import Layout from '../Layout'
import { getBrowserType } from '../lib/utils'

export default function Connect() {
  const Home = dynamic(() => import('../components/Home/index'), {
    ssr: false,
  })

  React.useEffect(() => {
    getBrowserType()
  }, [])

  return (
    <Layout navbar title='FriendsVPN Extension'>
      <Home />
    </Layout>
  )
}
