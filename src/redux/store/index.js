import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['people'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

