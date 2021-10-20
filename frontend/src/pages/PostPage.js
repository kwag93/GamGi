import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import PostViewerContainer from '../containers/PostViewerContainer';

const BackgroundBlock = styled.div`
  background-image: url('https://i.pinimg.com/564x/3c/1c/ab/3c1cabb4b75256b7a4ec508e6c02d2d3.jpg');

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostPage = () => {
  return (
    <div>
      <HeaderContainer />
      <BackgroundBlock>
        <PostViewerContainer />
      </BackgroundBlock>
    </div>
  );
};

export default PostPage;
