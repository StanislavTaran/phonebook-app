import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import ReduxThunk from 'redux-thunk';
import contacts from './reducer';
import session from './session/sessionReducers';

const rootReducer = combineReducers({
  contacts,
  session,
});

const middlewares = [ReduxThunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});

export default store;
