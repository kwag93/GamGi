import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/stressCheck';
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

const StressCheck = () => {
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
              <h3>스트레스 자가진단</h3>
              <div>
                이 척도는 일상생활에서 주관적으로 느끼는 스트레스의 정도를
                평가하기 위한 척도입니다. <br /> 최근 1개월 동안 문항에 해당하는
                내용을 얼마나 자주 느꼈는지 체크해 주십시오.
              </div>
              <BottomLine />
            </TitleBox>
            <table border="black">
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <td> </td>
                  <td>지난 1개월간 나는</td>
                  <td>전혀없음</td>
                  <td>거의 없음</td>
                  <td>때때로 있음</td>
                  <td>자주 있음</td>
                  <td>매우 자주</td>
                </tr>
              </thead>
              <tbody>
                {dummy.stress.map((content, idx, i) => (
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
                    <td>5</td>
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

export default StressCheck;
