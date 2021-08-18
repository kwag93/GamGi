import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 50px;
  border: 1px solid ${palette.gray[5]};
  border-radius: 15px;
  padding-bottom: 0.5rem;
  outline: none;
  font-size: 15px;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1.25rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 2rem;
  width: 50%;
  height: 50px;
  border: 2px solid;
  border-radius: 15px;
  font-size: 15px;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
        {type === 'login' ? (
          <Link to="/register">
            <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
              회원가입
            </ButtonWithMarginTop>
          </Link>
        ) : (
          <Link to="/login">
            <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
              로그인
            </ButtonWithMarginTop>
          </Link>
        )}
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
