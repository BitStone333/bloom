import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/member';
import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILURE,
  REMOVE_PHOTO_REQUEST,
  REMOVE_PHOTO_SUCCESS,
  REMOVE_PHOTO_FAILURE,
} from '../actions/member/member.types';
import {API} from '../../services';
import {APIGetPhotosResponse} from '../types';

function* getMemberPhotos({payload}: ReturnType<typeof actions.getPhotos>) {
  try {
    const {data}: {data: APIGetPhotosResponse[]} = yield call(
      API.get,
      `/member/${payload}/photos`,
    );


    yield put({
      type: GET_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: GET_PHOTOS_FAILURE,
      error: e,
    });
  }
}

function* addMemberPhoto({payload}: ReturnType<typeof actions.addPhoto>) {
  try {
    const {data} = yield call(
      API.post,
      `/member/${payload.memberId}/photos`,
      payload,
    );
    yield put({type: ADD_PHOTO_SUCCESS, payload: data});
  } catch (e) {
    yield put({
      type: ADD_PHOTO_FAILURE,
      error: e,
    });
  }
}

function* removeMemberPhoto({payload}: ReturnType<typeof actions.removePhoto>) {
  try {
    yield call(API.delete, `/photos/${payload}`);
    yield put({type: REMOVE_PHOTO_SUCCESS, payload});
  } catch (e) {
    yield put({
      type: REMOVE_PHOTO_FAILURE,
      error: e,
    });
  }
}

export default function* memberSaga() {
  yield takeLatest(GET_PHOTOS_REQUEST, getMemberPhotos);
  yield takeLatest(ADD_PHOTO_REQUEST, addMemberPhoto);
  yield takeLatest(REMOVE_PHOTO_REQUEST, removeMemberPhoto);
}
