import React, { useReducer, useCallback } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  //Load User
  const loadUser = useCallback(async () => {
    setAuthToken(localStorage.token)

    try {
      const res = await axios.get('/api/auth')

      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (err) {
      dispatch({ type: AUTH_ERROR })
    }
  }, [])

  //Register User
  const register = async formData => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users', formData, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })

      loadUser()
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      })
    }
  }

  //Login User
  const loginUser = async formData => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/auth', formData, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })

      loadUser()
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      })
    }
  }

  //Logout User
  const logoutUser = () => {
    dispatch({ type: LOG_OUT })
  }

  //Clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loginUser,
        loadUser,
        logoutUser,
        clearErrors
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
