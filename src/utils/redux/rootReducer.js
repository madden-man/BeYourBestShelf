import { combineReducers } from 'redux';
import { detailsReducer } from '../../views/detail/state/reducer';
import { shelfReducer } from '../../views/home/state/reducer';

export const rootReducer = combineReducers({
  detailsReducer,
  shelfReducer
});