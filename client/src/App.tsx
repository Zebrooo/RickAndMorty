import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllPostPage from './components/UI/AllPostPage';
import { useAppDispatch } from './Redux/hooks';
import { loadAllPosts } from './Redux/Post/PostSliceReducer';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<AllPostPage />} />
    </Routes>
  );
}

export default App;
