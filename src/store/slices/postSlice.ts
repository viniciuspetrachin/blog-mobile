import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import api from '~/services/api';
import { IPost } from './postsSlice';
import { RootState } from '../';

interface PostState {
  data: IPost | null;
  isLoading: boolean;
}

const initialState: PostState = {
  data: null,
  isLoading: true,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPost(state) {
      state.data = null;
    },
    setPostLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action: PayloadAction<IPost>) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPost.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const fetchPost = createAsyncThunk(
  'posts/fetchPost',
  async (postId: number, thunkAPI) => {
    const { post } = thunkAPI.getState() as RootState;
    thunkAPI.dispatch(setPostLoading(true));
    if (post.data?.id === postId) {
      return post.data;
    } else {
      thunkAPI.dispatch(clearPost());
      try {
        const response = await api.get(`/posts/${postId}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  }
);

export const { clearPost, setPostLoading } = postSlice.actions;
export default postSlice.reducer;
