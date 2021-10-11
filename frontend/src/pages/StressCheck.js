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
  const itemSum = () => {
    let sum = 0;
    const cbox = document.getElementsByName('chkbox');
    for (let i = 0; i < cbox.length; i++) {
      if (cbox[i].checked == true) {
        sum += parseInt(cbox[i].value);
      }
    }
    document.getElementById('total_sum').value = sum;
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
              <h2>스트레스 자가진단</h2>
              <div>
                이 척도는 일상생활에서 주관적으로 느끼는 스트레스의 정도를
                평가하기 위한 척도입니다. <br /> 최근 1개월 동안 문항에 해당하는
                내용을 얼마나 자주 느꼈는지 체크해 주십시오.
              </div>
              <BottomLine />
            </TitleBox>
            <table border="black">
              <colgroup>
                <col width="6%" />
                <col width="auto" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <th colSpan="2">지난 1개월간 나는</th>
                  <th>전혀없음</th>
                  <th>거의없음</th>
                  <th>때때로 있음</th>
                  <th>자주 있음</th>
                  <th>매우 자주 있음</th>
                </tr>
              </thead>
              <tbody>
                {dummy.stress.map((content, idx) => (
                  <tr align="center" key={idx}>
                    <td>{content.id}</td>
                    <td>{content.content}</td>

                    {dummy.scores.map((score, idx) => (
                      <td align="center" key={idx}>
                        <input
                          name="chkbox"
                          type="checkbox"
                          onClick={itemSum}
                          value={score.score}
                          id={idx}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td align="center" colSpan="2">
                    합계
                  </td>
                  <td colSpan="4" align="right">
                    <input
                      border-color="white"
                      id="total_sum"
                      type="text"
                      size="5"
                      value="0"
                      readOnly
                    />
                    점
                  </td>
                </tr>
              </tfoot>
            </table>
            <br />
            <table border="black">
              <thead></thead>
              <tbody>
                {dummy.result.map((content, idx) => (
                  <tr align="center" key={idx}>
                    <td>{content.header}</td>
                    <td>{content.content}</td>
                    <td>{content.content2}</td>
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
