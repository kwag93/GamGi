import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import PostListContainer from '../containers/PostListContainer';
import PaginationContainer from '../containers/PaginationContainer';

const BackgroundBlock = styled.div`
  background-image: url('https://i.pinimg.com/564x/3c/1c/ab/3c1cabb4b75256b7a4ec508e6c02d2d3.jpg');
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <BackgroundBlock>
        <PostListContainer />
        <PaginationContainer />
        <br />
        <br />
      </BackgroundBlock>
    </div>
  );
};

export default PostListPage;
