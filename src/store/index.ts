import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import commentsSlice from './slices/commentsSlice'
import postSlice from './slices/postSlice'

import postsSlice from './slices/postsSlice'

const reducers = combineReducers({
  posts: postsSlice,
  post: postSlice,
  comments: commentsSlice,
})

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
})



export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>