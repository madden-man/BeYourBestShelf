import { DETAIL_ACTION_TYPES } from './actionTypes';

export const detailsRequested = (volumeId) => ({
    type: DETAIL_ACTION_TYPES.DETAILS_REQUESTED,
    payload: {
        volumeId
    }
});

export const detailsReceived = (details) => ({
  type: DETAIL_ACTION_TYPES.DETAILS_RECEIVED,
  payload: {
    details,
  },
});

export const detailsCleared = () => ({
    type: DETAIL_ACTION_TYPES.DETAILS_CLEARED
});