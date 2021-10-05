import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/depressionCheck';
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

const DepressionCheck = () => {
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
              <h3>우울증 자가진단</h3>
              <div>
                아래에 있는 항목들은 지난 일주일 동안의 당신의 상태에 대한
                질문입니다. 이와 같은 일들이 지난 일주일 동안 얼마나 자주
                일어났었는지 답변해 주십시오
              </div>
              <BottomLine />
            </TitleBox>
            <table border="black">
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <td> </td>
                  <td>지난 1주일간 나는</td>
                  <td>
                    극히 드물었다 <br />
                    (1일 미만)
                  </td>
                  <td>
                    가끔 있었다 <br /> (1-2일)
                  </td>
                  <td>
                    종종 있었다 <br /> (3-4일)
                  </td>
                  <td>
                    대부분 그랬다 <br /> (5-7일)
                  </td>
                </tr>
              </thead>
              <tbody>
                {dummy.depression.map((content, idx, i) => (
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

export default DepressionCheck;
