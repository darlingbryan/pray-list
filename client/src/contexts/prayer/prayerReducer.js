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
    default:
      return state
  }
}
