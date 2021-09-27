import React from 'react';
import Button from '../components/common/Button';
import styled from 'styled-components';
import love from '../lib/images/love.png';
import happy from '../lib/images/happy.png';
import depress from '../lib/images/depress.png';
import joy from '../lib/images/joy.png';
import angry from '../lib/images/angry.png';
import nervous from '../lib/images/nervous.png';
import nothing from '../lib/images/nothinking.png';
import sad from '../lib/images/sad.png';
import HeaderContainer from '../containers/HeaderContainer';

const Box = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const Img = styled.img`
  width: 50%;
`;

const Emotion = () => {
  return (
    <div>
      <HeaderContainer />
      <Box>
        <h2>✿ 오늘의 감기 ✿</h2>
        <br />
        <h3>감정을 선택해주세요</h3>
        <table border>
          <tbody>
            <tr height="100" />
            <tr align="center">
              <td width="200">
                <Img src={happy} />
              </td>
              <td width="200">
                <Img src={joy} />
              </td>
              <td width="200">
                <Img src={love} />
              </td>
              <td width="200">
                <Img src={angry} />
              </td>
            </tr>
            <tr align="center">
              <td width="200">행복</td>
              <td width="200">기쁨</td>
              <td width="200">사랑</td>
              <td width="200">화남</td>
            </tr>
            <tr height="30" />
            <tr align="center">
              <td width="200">
                <Img src={sad} />
              </td>
              <td width="200">
                <Img src={depress} />
              </td>
              <td width="200">
                <Img src={nervous} />
              </td>
              <td width="200">
                <Img src={nothing} />
              </td>
            </tr>
            <tr align="center">
              <td width="200">슬픔</td>
              <td width="200">우울</td>
              <td width="200">불안</td>
              <td width="200">생각없음</td>
            </tr>
            <tr height="100" />
          </tbody>
        </table>
        <Button> - </Button>
      </Box>
    </div>
  );
};

export default Emotion;
