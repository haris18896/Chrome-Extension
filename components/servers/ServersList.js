import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

function ServersList({ children, flag, name, ping }) {
  return (
    <div className='Servers--list__servers'>
      <div className='Servers--list__servers--country'>
        <Image src={flag} alt={name} width={30} height={30} />
        <span>{name}</span>{' '}
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
  flag: PropTypes.object,
  name: PropTypes.string,
  ping: PropTypes.string
}

export default ServersList
