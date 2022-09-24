import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { bookAPI } from '../services/BookService'

const rootReducer = combineReducers({
  [bookAPI.reducerPath]: bookAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookAPI.middleware),
  })
}
