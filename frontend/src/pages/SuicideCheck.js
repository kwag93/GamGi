import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/suicideCheck';
import { Radio } from 'antd';
import palette from '../lib/styles/palette';

const { Content } = Layout;

const StyledContent = styled(Content)`
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 100;
  margin-top: 2rem;
  overflow: 'initial';
`;

const StyledLayout = styled(Layout)`
  background: white;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
`;

const TitleBox = styled.div`
  width: 100%;
  background: white;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const SuicideCheck = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <HeaderContainer />
      <TopBox />
      <StyledLayout>
        <CheckMenuBar />
        <StyledLayout style={{ padding: '0 100px 24px' }}>
          <StyledContent>
            <TitleBox>
              <h3>자살위험성 자가진단</h3>
              <div>
                다음은 여러분이 일상생활에서 경험할 수 있는 내용들로 구성되어
                있습니다. <br /> 문항들을 자세히 읽어보시고 당신이 일상생활에서
                느끼고 있는 바를 가장 잘 나타내 주는 문항의 해당 번호를 기입해
                주십시오.
              </div>
              <BottomLine />
            </TitleBox>
            <table border="black">
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <td> </td>
                  <td>문항</td>
                  <td>극히 드물었다</td>
                  <td>가끔 있었다</td>
                  <td>종종 있었다</td>
                  <td>대부분 그랬다</td>
                </tr>
              </thead>
              <tbody>
                {dummy.suicide.map((content, idx, i) => (
                  <tr align="center" key={idx}>
                    <td>{content.id}</td>
                    <td>{content.content}</td>
                    <td>
                      <Radio.Group onChange={onChange} value={value} id={i}>
                        <Radio></Radio>
                      </Radio.Group>
                    </td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default SuicideCheck;
