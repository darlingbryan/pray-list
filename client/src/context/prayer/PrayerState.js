import React, { useReducer, useCallback } from 'react'
import axios from 'axios'
import prayerReducer from './prayerReducer'
import PrayerContext from './prayerContext'
import {
  GET_PRAYERS,
  ADD_PRAYER,
  DELETE_PRAYER,
  UPDATE_PRAYER,
  SET_CURRENT,
  CLEAR_CURRENT,
  PRAYER_ERROR,
  CLEAR_PRAYERS,
  FILTER_PRAYERS,
  CLEAR_FILTERS
} from '../types'

const PrayerState = props => {
  const initialState = {
    prayers: [],
    current: null,
    filtered: null,
    error: null
  }

  const [state, dispatch] = useReducer(prayerReducer, initialState)

  //Get Prayer
  const getPrayer = useCallback(async () => {
    try {
      const res = await axios.get('api/prayers')
      dispatch({
        type: GET_PRAYERS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: PRAYER_ERROR,
        payload: err.response.msg
      })
    }
  }, [])

  //Add Prayer
  const addPrayer = async prayer => {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      const res = await axios.post('/api/prayers', prayer, config)
      dispatch({
        type: ADD_PRAYER,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: PRAYER_ERROR,
        payload: err.response.msg
      })
    }
  }

  //Delete Prayer
  const deletePrayer = async _id => {
    try {
      await axios.delete(`/api/prayers/${_id}`)
      dispatch({
        type: DELETE_PRAYER,
        payload: _id
      })
    } catch (err) {
      dispatch({
        type: PRAYER_ERROR,
        payload: err.msg
      })
    }
  }

  //Update Prayer
  const updatePrayer = async prayer => {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      const res = await axios.put(`/api/prayers/${prayer._id}`, prayer, config)
      dispatch({
        type: UPDATE_PRAYER,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: PRAYER_ERROR,
        payload: err.msg
      })
    }
  }

  //Clear Prayers on State
  const clearPrayers = () => {
    dispatch({
      type: CLEAR_PRAYERS
    })
  }

  //Set Current
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  //Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  //Filter Contacts
  const filterPrayers = text => {
    dispatch({
      type: FILTER_PRAYERS,
      payload: text
    })
  }

  //Clear Filters
  const clearFilters = () => {
    dispatch({
      type: CLEAR_FILTERS
    })
  }

  return (
    <PrayerContext.Provider
      value={{
        prayers: state.prayers,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getPrayer,
        addPrayer,
        deletePrayer,
        updatePrayer,
        clearPrayers,
        setCurrent,
        clearCurrent,
        filterPrayers,
        clearFilters
      }}>
      {props.children}
    </PrayerContext.Provider>
  )
}

export default PrayerState
