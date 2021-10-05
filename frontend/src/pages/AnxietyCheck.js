import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import CheckMenuBar from '../components/common/CheckMenuBar';
import HeaderContainer from '../containers/HeaderContainer';
import dummy from '../db/anxietyCheck.json';
import palette from '../lib/styles/palette';
import { Radio } from 'antd';

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

const AnxietyCheck = () => {
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
              <h3>불안장애 자가진단</h3>
              <div>
                다음 문장들은 사람들이 자신을 표현하는데 사용되는 것들입니다.
                <br />각 문장을 잘 읽으시고 각 문장의 오른편에 있는 네 개의 항목
                중에서 당신이 지금 이 순간에 바로 느끼고 있는 상태를 가장 잘
                나타내주는 문항 하나에 체크 하여 주십시오
              </div>
              <BottomLine />
            </TitleBox>

            <table border="black">
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <td> </td>
                  <td>질문사항</td>
                  <td>거의 그렇지 않다</td>
                  <td>가끔 그렇다</td>
                  <td>자주 그렇다</td>
                  <td>거의 언제나 그렇다</td>
                </tr>
              </thead>
              <tbody>
                {dummy.anxiety.map((content, idx, i) => (
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

export default AnxietyCheck;
