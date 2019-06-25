import {
  GET_PRAYERS,
  ADD_PRAYER,
  DELETE_PRAYER,
  UPDATE_PRAYER,
  SET_CURRENT,
  CLEAR_CURRENT,
  PRAYER_ERROR,
  FILTER_CONTACT,
  CLEAR_FILTER
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
    default:
      return state
  }
}
