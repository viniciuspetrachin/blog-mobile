import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import api from '~/services/api'

export interface IPost {
  id: number
  userId: number
  title: string
  body: string
}

interface PostsState {
  data: IPost[]
  isLoading: boolean
}

const initialState: PostsState = {
  data: [],
  isLoading: false,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await api.get('/posts')
    return response.data
  }
)

export const { } = postsSlice.actions
export default postsSlice.reducer