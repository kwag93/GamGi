import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostListContainer from '../containers/PostListContainer';
import PaginationContainer from '../containers/PaginationContainer';
const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </div>
  );
};

export default PostListPage;
