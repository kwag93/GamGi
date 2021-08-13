import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import StyledModal from '../components/common/SelectEmotionModal';

const WriteBox = styled.div`
  padding: 30px;
  .div {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

const Box = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8rem;
`;

const Title = styled.input`
  width: 65%;
  padding-bottom: 20px;
  border: none;
  font-size: 22px;
  border-bottom: solid 1px #ababab;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  padding-top: 20px;
  width: 65%;
  resize: none;
  border: none;
  height: 500px;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 30px;
  width: 120px;
  padding: 5px;
  border: solid 1px #ababab;
  background-color: white;
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
      <Header />
      <Box>
        <Title type="text" placeholder="제목" />
        <Content type="text" placeholder="내용을 입력하세요" />
      <div>
        <SubmitButton onClick={openModal}>작성하기</SubmitButton>
        <StyledModal data={data} state={modalState} closeModal={closeModal} />
      </div>
       </Box>
    </div>
  );
};

export default WritePage;
