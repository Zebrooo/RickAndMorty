import { configureStore } from '@reduxjs/toolkit';
import PostSliceReducer from './Post/PostSliceReducer';

const store = configureStore({
  reducer: {
    posts: PostSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
