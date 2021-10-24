import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import GamgiPage from '../lib/images/WelcomeToTheGamgi1@2x.png';

const Box = styled.div`
  background-color: #030020;
`;

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  padding: 4rem;
`;

const Gamgi = () => {
  return (
    <div>
      <HeaderContainer />
      <Box>
        <ImgBox src={GamgiPage}></ImgBox>
      </Box>
    </div>
  );
};

export default Gamgi;
