import {APIPhotoBase} from '../../types';

export const GET_PHOTOS_REQUEST = 'MEMBER/GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'MEMBER/GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILURE = 'MEMBER/GET_PHOTOS_FAILURE';

export const ADD_PHOTO_REQUEST = 'MEMBER/ADD_PHOTO_REQUEST';
export const ADD_PHOTO_SUCCESS = 'MEMBER/ADD_PHOTO_SUCCESS';
export const ADD_PHOTO_FAILURE = 'MEMBER/ADD_PHOTO_FAILURE';

export const REMOVE_PHOTO_REQUEST = 'MEMBER/REMOVE_PHOTO_REQUEST';
export const REMOVE_PHOTO_SUCCESS = 'MEMBER/REMOVE_PHOTO_SUCCESS';
export const REMOVE_PHOTO_FAILURE = 'MEMBER/REMOVE_PHOTO_FAILURE';

export interface GetMemberPhotosAction {
  type: typeof GET_PHOTOS_REQUEST;
  payload: string;
}

export interface AddMemberPhotoAction {
  type: typeof ADD_PHOTO_REQUEST;
  payload: APIPhotoBase & {
    memberId: string;
  };
}

export interface RemoveMemberPhotoAction {
  type: typeof REMOVE_PHOTO_REQUEST;
  payload: string;
}

export type MemberActionTypes =
  | GetMemberPhotosAction
  | AddMemberPhotoAction
  | RemoveMemberPhotoAction;
