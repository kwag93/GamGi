import React from 'react';
import PostList from '../components/posts/PostList';
import HeaderContainer from '../containers/HeaderContainer';

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostList />
    </div>
  );
};

export default PostListPage;
