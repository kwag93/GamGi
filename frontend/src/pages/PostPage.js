import React from 'react';
import PostViewer from '../components/posts/PostViewer';
import HeaderContainer from '../containers/HeaderContainer';

const PostPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostViewer />
    </div>
  );
};

export default PostPage;
