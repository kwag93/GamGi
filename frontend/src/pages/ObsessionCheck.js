import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import CheckMenuBar from '../components/common/CheckMenuBar';
import dummy from '../db/obsessionCheck';
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

const ObsessionCheck = () => {
  const itemSum = () => {
    let sum = 0;
    const cbox = document.getElementsByClassName('chkbox');
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
              <h2>강박장애 자가진단 (MOCI)</h2>
              <BottomLine />
            </TitleBox>
            <table border="black">
              <colgroup>
                <col width="6%" />
                <col width="auto" />
                <col width="10%" />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr align="center" bgcolor="#EBEFF7">
                  <th colSpan="2">문항</th>
                  <th>예</th>
                  <th>아니오</th>
                </tr>
              </thead>
              <tbody>
                {dummy.obsession.map((content, idx) => (
                  <tr align="center" key={idx}>
                    <td>{content.id}</td>
                    <td>{content.content}</td>

                    {dummy.scores.map((score, idx) => (
                      <td align="center" key={idx}>
                        <input
                          className="chkbox"
                          name={content.id}
                          type="radio"
                          onClick={itemSum}
                          value={score.score}
                          id={idx}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <br />
            <br />
            <h2 align="left">강박장애 검사결과</h2>
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
                  <col width="2%" />
                  <col width="8%" />
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
              <div>
                <br />
                <p>출처: Maudsley Obsessional-Compulsive Inventory(MOCI)</p>
              </div>
            </div>
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </div>
  );
};

export default ObsessionCheck;
