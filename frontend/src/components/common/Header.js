import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import Button from './Button';

const HeaderBlock = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 1rem;
`;

const Header = () => {
  return (
    <div>
      <HeaderBlock>
        <Wrapper>
          <StyledLink to="/" className="logo">
            감기 Gamgi
          </StyledLink>
          <StyledLink to="/calendar">CALENDAR</StyledLink>
          <StyledLink to="/">DAIARY</StyledLink>
          <StyledLink to="/selfcheck">SELF CHECK</StyledLink>
          <StyledLink to="/challenge">CHALLENGE</StyledLink>
          <div className="right">
            <Button to="/login">로그인</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </div>
  );
};

export default Header;
