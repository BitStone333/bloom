import {all} from 'redux-saga/effects';
import memberSaga from './member.saga';

export default function* rootSaga() {
  yield all([memberSaga()]);
}
