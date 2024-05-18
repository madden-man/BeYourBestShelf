import { SHELF_ACTION_TYPES } from './actionTypes';

export const shelvesReceived = (shelves) => ({
  type: SHELF_ACTION_TYPES.SHELVES_RECEIVED,
  payload: {
    shelves,
  },
});
