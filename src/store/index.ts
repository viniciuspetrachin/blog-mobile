import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'

const reducers = combineReducers({
  counter: counterSlice,
})

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
})



export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>