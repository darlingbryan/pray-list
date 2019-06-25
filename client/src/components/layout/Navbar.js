import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title, icon }) => {
  return (
    <div className='ui text menu'>
      <Link to='/'>
        <h1>
          <i className={icon}>{title}</i>
        </h1>
      </Link>

      <div className='right menu'>
        <Link to='/about' className='item'>
          About
        </Link>
        <Link to='/register' className='item'>
          Register
        </Link>
        <Link to='/login' className='item'>
          Login
        </Link>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}

Navbar.defaultProps = {
  title: 'PrayerList',
  icon: 'fas fa-praying-hands'
}

export default Navbar
