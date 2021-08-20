import React, { useState } from 'react';
import styled from 'styled-components';
import StyledModal from '../components/common/SelectEmotionModal';
import EditorContainer from '../containers/EditorContainer';
import HeaderContainer from '../containers/HeaderContainer';
import WriteButtonsContainer from '../containers/WriteButtonsContainer';

const Box = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const WritePage = () => {
  const data = {
    title: '오늘의 감기',
    description: '오늘 선택된 감기는 우울 ',
  };
  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };
  return (
    <div>
      <HeaderContainer />
      <Box>
        <EditorContainer />
        <div>
          <WriteButtonsContainer openModal={openModal} />
          <StyledModal data={data} state={modalState} closeModal={closeModal} />
        </div>
      </Box>
    </div>
  );
};

export default WritePage;
