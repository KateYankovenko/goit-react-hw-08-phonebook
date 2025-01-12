import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./auth/auth-slice";
import { phonebookReducer } from "./contacts/phonebook-slice";

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}), logger];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice.reducer),
        phonebook:  phonebookReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
   
});

export const persistor = persistStore(store);




