import {
  GET_PHOTOS_REQUEST,
  ADD_PHOTO_REQUEST,
  REMOVE_PHOTO_REQUEST,
  GetMemberPhotosAction,
  AddMemberPhotoAction,
  RemoveMemberPhotoAction,
} from './member.types';
import {APIPhotoBase} from '../../types';

export const getPhotos = (memberId: string): GetMemberPhotosAction => ({
  type: GET_PHOTOS_REQUEST,
  payload: memberId,
});

export const addPhoto = (
  memberId: string,
  photo: APIPhotoBase,
): AddMemberPhotoAction => ({
  type: ADD_PHOTO_REQUEST,
  payload: {
    memberId,
    ...photo,
  },
});

export const removePhoto = (photoId: string): RemoveMemberPhotoAction => ({
  type: REMOVE_PHOTO_REQUEST,
  payload: photoId,
});
