import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginModalBlock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const LoginModal = () => {
  return (
    <Fullscreen>
      <LoginModalBlock>
        <h2>로그인 에러</h2>
        <p>로그인 하러 가시겠습니까?</p>
        <div className="buttons">
          <StyledButton cyan to="/">
            로그인 페이지로 가기
          </StyledButton>
        </div>
      </LoginModalBlock>
    </Fullscreen>
  );
};

export default LoginModal;
