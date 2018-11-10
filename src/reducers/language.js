import { SET_LANGUAGE } from '../actions';

export const language = (state = {}, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {...state, language: action.payload };
  
    default:
      return state;
  }
}