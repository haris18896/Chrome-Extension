/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PropTypes from 'prop-types'
import { useAmp } from 'next/amp'

function ServersList({ children, flag, name, ping, sub }) {
  const isAmp = useAmp()

  return (
    <div className='Servers--list__servers'>
      <div className='Servers--list__servers--country'>
        {isAmp ? (
          <amp-img width='30' height='30' src={`${flag}`} alt={name} layout='responsive' />
        ) : (
          <img width='30' height='30' src={`${flag}`} alt={name} />
        )}
        <span>{name}</span> {sub && <span className='Servers--list__servers--country--sub'>{sub}</span>}
      </div>
      <div className='Servers--list__servers--ping'>
        {children}
        <span>{ping}</span>
      </div>
    </div>
  )
}

ServersList.propTypes = {
  children: PropTypes.node,
  flag: PropTypes.string,
  name: PropTypes.string,
  ping: PropTypes.string
}

export default ServersList
