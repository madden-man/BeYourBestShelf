import { DETAIL_ACTION_TYPES as actionTypes } from './actionTypes';

import './sagas';

const initialState = {};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.DETAILS_REQUESTED:
      return {
        ...state,
        volumeId: action.payload.volumeId
      };

    case actionTypes.DETAILS_RECEIVED:
      return {
        ...state,
        ...action.payload.details,
      };

    case actionTypes.DETAILS_CLEARED:
      return initialState;
    
    default:
      return state;
  }
}