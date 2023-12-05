import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'

import { viewReducer } from "./features/view/view-slice";
import { taskReducer } from "./features/boards/boards-slice";

const rootReducer = combineReducers({
   view: viewReducer,
   task: taskReducer,
});

const persistConfig = {
   key: 'root',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   devTools: true,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store);