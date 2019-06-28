import React, { useContext, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const Navbar = ({ title, icon }) => {
  const { isAuthenticated, loadUser, user, logoutUser } = useContext(
    AuthContext
  )

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  const onLogOut = () => {
    logoutUser()
  }

  const NavLinks = () => {
    if (isAuthenticated) {
      return (
        <Fragment>
          <h3>Hi {user && user.name}</h3>
          <i className='fas fa-sign-out-alt' onClick={onLogOut} />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Link to='/about' className='item'>
            About
          </Link>
          <Link to='/register' className='item'>
            Register
          </Link>
          <Link to='/login' className='item'>
            Login
          </Link>
        </Fragment>
      )
    }
  }
  return (
    <div className='ui text menu'>
      <Link to='/'>
        <h1>
          <i className={icon}>{title}</i>
        </h1>
      </Link>

      <div className='right menu'>
        <NavLinks />
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
