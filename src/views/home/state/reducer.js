import { SHELF_ACTION_TYPES as actionTypes } from './actionTypes';

import './sagas';

const initialState = {
    shelves: {}
};

export const shelfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHELVES_RECEIVED:
      return {
        ...state,
        shelves: action.payload.shelves,
      };
    default:
      return state;
  }
}