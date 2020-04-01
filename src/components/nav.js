import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <h1>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/about'}>Nosotros</Link>
    </h1>
  )
}

export default Navigation
