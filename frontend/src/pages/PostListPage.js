import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostListContainer from '../containers/PostListContainer';
import PaginationContainer from '../containers/PaginationContainer';
import styled from 'styled-components';
import bg01 from '../lib/images/bg01.jpg';

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
