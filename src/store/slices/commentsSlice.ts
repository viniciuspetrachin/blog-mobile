import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import api from '~/services/api';
import { RootState } from '../';

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

}

interface CommentsState {
  data: IComment[];
  isLoading: boolean;
}

const initialState: CommentsState = {
  data: [],
  isLoading: true,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    clearComments(state) {
      state.data = [];
    },
    setCommentsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId: number, thunkAPI) => {
    const { comments } = thunkAPI.getState() as RootState;
    thunkAPI.dispatch(setCommentsLoading(true));

    const isCached = comments.data && comments.data.length > 0 && comments.data[0].postId === postId;

    if (isCached) {
      return comments.data;
    } else {
      thunkAPI.dispatch(clearComments());
      try {
        const response = await api.get(`/posts/${postId}/comments`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  }
);

export const { clearComments, setCommentsLoading } = commentsSlice.actions;
export default commentsSlice.reducer;
