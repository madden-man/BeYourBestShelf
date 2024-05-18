// import authSagas from 'views/auth/state/sagas';
// import chatSagas from 'views/chat/state/sagas';
import { all, fork } from 'redux-saga/effects';

export const allSagas = function* root() {
  yield all([
    // ...authSagas,
    // ...chatSagas,
  ].map(saga => fork(saga)));
};