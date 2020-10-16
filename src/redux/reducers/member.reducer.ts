import * as actionTypes from '../actions/member/member.types';
import {APIPhoto} from '../types';

export interface IAction {
  type: string;
  payload: any;
  error?: any;
}

export interface IMemberState {
  isLoading: boolean;
  photos: APIPhoto[];
  memberId: string;
  error: any;
}

const initialState: IMemberState = {
  isLoading: false,
  memberId: '1',
  photos: [],
  error: null,
};

export default function memberReducer(
  state = initialState,
  action: IAction,
): IMemberState {
  switch (action.type) {
    case actionTypes.GET_PHOTOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photos: action.payload,
      };
    case actionTypes.GET_PHOTOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.ADD_PHOTO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ADD_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photos: [...state.photos, action.payload],
      };
    case actionTypes.ADD_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.REMOVE_PHOTO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REMOVE_PHOTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        photos: state.photos.filter((photo) => photo.id !== action.payload),
      };
    case actionTypes.REMOVE_PHOTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
