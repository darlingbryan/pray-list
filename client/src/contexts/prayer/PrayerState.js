import React, { useReducer } from 'react'
import uuid from 'uuid'
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
  FILTER_PRAYERS,
  CLEAR_FILTERS
} from '../types'

const PrayerState = props => {
  const initialState = {
    prayers: [
      {
        id: 1,
        name: 'Family',
        description: 'For our wellbeing.',
        answered: true,
        archive: true
      },
      {
        id: 2,
        name: 'Work',
        description: 'A more stable job.',
        answered: true,
        archive: false
      },
      {
        id: 3,
        name: 'Israel',
        description: 'For their peace',
        answered: false,
        archive: false
      }
    ],
    current: null,
    filtered: null,
    error: null
  }

  const [state, dispatch] = useReducer(prayerReducer, initialState)

  //Add Prayer
  const addPrayer = prayer => {
    prayer.id = uuid.v4
    dispatch({
      type: ADD_PRAYER,
      payload: prayer
    })
  }

  //Delete Prayer
  const deletePrayer = id => {
    dispatch({
      type: DELETE_PRAYER,
      payload: id
    })
  }

  //Update Prayer
  const updatePrayer = contact => {
    dispatch({
      type: UPDATE_PRAYER,
      payload: contact
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
        addPrayer,
        deletePrayer,
        updatePrayer,
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