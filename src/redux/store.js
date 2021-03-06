import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ReduxThunk from 'redux-thunk';
import app from './app/appReducers';
import contacts from './phonebook/reducer';
import session from './session/sessionReducers';
import account from './account/accountReducers';

const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  app,
  contacts,
  account,
  session: persistReducer(persistConfig, session),
});

const middlewares = [ReduxThunk];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});

export const persistor = persistStore(store);
