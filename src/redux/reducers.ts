import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from '../containers/counter';
import { noteReducer } from './modules/note';
import { todoReducer } from './modules/todo';
import { experienceReducer } from './modules/experience';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

export const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  note: noteReducer,
  todo: todoReducer,
  experience: experienceReducer,
  //   stars: starsReducer,
  reduxAsyncConnect: reducer,
});
