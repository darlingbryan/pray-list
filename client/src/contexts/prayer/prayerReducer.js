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

export default (state, action) => {
  switch (action.type) {
    case ADD_PRAYER:
      return {
        ...state,
        prayers: [action.payload, ...state.prayers]
      }
    case DELETE_PRAYER:
      return {
        ...state,
        prayers: state.prayers.filter(prayer => prayer.id !== action.payload)
      }
    case UPDATE_PRAYER:
      return {
        ...state,
        prayers: state.prayers.map(prayer =>
          prayer.id === action.payload.id ? action.payload : prayer
        )
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case FILTER_PRAYERS:
      return {
        ...state,
        filtered: state.prayers.filter(prayer => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return prayer.name.match(regex) || prayer.description.match(regex)
        })
      }
    case CLEAR_FILTERS:
      return {
        ...state,
        filtered: null
      }
    default:
      return state
  }
}
