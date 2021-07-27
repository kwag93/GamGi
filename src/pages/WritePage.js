import React from 'react';
import styled from 'styled-components';

const WriteBox = styled.div`
  padding: 20px;
  padding-left: 30px;
  .div {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

const Title = styled.input`
  width: 91%;
  padding-bottom: 30px;
  border: none;
  font-size: 22px;
  border-bottom: solid 1px #ababab;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  width: 91%;
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
  return (
    <div>
      <WriteBox>
        <Title type="text" placeholder="제목" />
        <Content type="text" placeholder="내용을 입력하세요" />
      </WriteBox>
      <div>
        <SubmitButton>작성하기</SubmitButton>
      </div>
    </div>
  );
};

export default WritePage;
