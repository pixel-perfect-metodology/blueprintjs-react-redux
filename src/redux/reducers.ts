import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from '../containers/counter';
import { noteReducer } from '../components/note';
import { todoReducer } from '../components/todo';
import { experienceReducer } from '../containers/experience';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

export const rootReducer: Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  note: noteReducer,
  todo: todoReducer,
  experience: experienceReducer,
  reduxAsyncConnect: reducer,
});
