/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { ApiData, Post, PostState } from './PostType';

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    deletePosts: (state, action: PayloadAction<Post['id']>) => {
      state.posts.filter((post) => post.id !== action.payload);
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});
export const { setPosts, deletePosts, addPost } = postSlice.actions;
export default postSlice.reducer;

export const loadAllPosts = (): AppThunk => (dispatch) => {
  axios<ApiData>('https://rickandmortyapi.com/api/character')
    .then((res) => dispatch(setPosts(res.data.results)))
    .catch(console.log);
};
export const deleteOnePost =
  (id: number): AppThunk =>
  (dispatch) => {
    axios
      .delete<Post[]>(`posts/${id}`)
      .then((res) => dispatch(setPosts(res.data)))
      .catch(console.log);
  };
