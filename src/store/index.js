import { createStore } from 'redux';
import { language } from '../reducers/language';

const initialState = {
  language:'es_AR'
};


export const store = createStore(language,initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());