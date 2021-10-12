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
              <h2>불안장애 자가진단</h2>
              <div>
                다음 문장들은 사람들이 자신을 표현하는데 사용되는 것들입니다.
                <br />각 문장을 잘 읽으시고 각 문장의 오른편에 있는 네 개의 항목
                중에서 당신이 지금 이 순간에 바로 느끼고 있는 상태를 가장 잘
                나타내주는 문항 하나에 체크 하여 주십시오
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
              </colgroup>
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <th colSpan="2">문항</th>
                  <th>
                    거의 <br /> 그렇지 않다
                  </th>
                  <th>가끔 그렇다</th>
                  <th>자주 그렇다</th>
                  <th>
                    거의 <br /> 언제나 그렇다
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummy.anxiety.map((content, idx) => (
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
export default AnxietyCheck;
