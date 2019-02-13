import { REQUESTED_UNITS, REQUEST_FAILED, REQUEST_SUCCESS } from '../types';

const initialState = {
  loading: false,
  error: null,
  units: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_UNITS:
      return { ...state, loading: true, error: null };
    case REQUEST_SUCCESS:
      return { ...state, loading: false, units: action.units }
    case REQUEST_FAILED:
      return { ...state, loading: false, error: action.error }
    default:
      return state;
  }
}
