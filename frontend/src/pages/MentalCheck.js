import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/mentalCheck';
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

const MentalCheck = () => {
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
              <h2>일반정신건강 자가진단</h2>
              <div>
                이 척도는 당신이 정신건강 상의 어려움을 가지고 있는지를 평가하는
                척도입니다.
                <br />각 문항은 당신의 육체적, 정신적 상태를 포함한 일반적인
                건강상태에 관한 질문입니다.
                <br />
                이전과 비교하여 최근 2~3주 동안 당신이 주로 느낀 바를 잘 나타낸
                문항에 체크해 주십시오
              </div>
              <div>
                아래에 있는 항목들은 지난 일주일 동안의 당신의 상태에 대한
                질문입니다. 이와 같은 일들이 지난 일주일 동안 얼마나 자주
                일어났었는지 답변해 주십시오
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
                    극히 <br /> 드물다
                  </th>
                  <th>
                    가끔 <br /> 있었다
                  </th>
                  <th>
                    종종 <br /> 있었다
                  </th>
                  <th>
                    대부분 <br /> 그랬다
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummy.mental.map((content, idx) => (
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
            <br />
            <h3 align="left">일반정신건강 검사결과</h3>
            <BottomLine />
            <div align="right">
              <table>
                <tbody>
                  <tr align="right">
                    <td align="right">
                      <h3>합계</h3>
                    </td>
                    <td colSpan="4" align="right">
                      <h3>
                        <input
                          border-color="white"
                          id="total_sum"
                          type="text"
                          size="5"
                          value="0"
                          readOnly
                        />
                        점
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table border="black">
                <colgroup>
                  <col width="4%" />
                  <col width="10%" />
                </colgroup>
                <tbody>
                  {dummy.result.map((content, idx) => (
                    <tr align="center" key={idx}>
                      <td bgcolor="#EBEFF7">{content.header}</td>
                      <td align="left">
                        <tr>{content.content}</tr>
                        <tr>{content.content2}</tr>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default MentalCheck;
