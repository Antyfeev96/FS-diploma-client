import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sessionsApi } from './sessionsApi'
import { filmsApi } from "./filmsApi";
import {hallsApi} from "./hallsApi";

const rootReducer = combineReducers({
    [sessionsApi.reducerPath]: sessionsApi.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
    [hallsApi.reducerPath]: hallsApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(sessionsApi.middleware)
                .concat(filmsApi.middleware)
                .concat(hallsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
