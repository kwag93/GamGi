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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Img = styled.img`
  width: 70%;
`;

const Emotion = () => {
  return (
    <div>
      <Box>
        <br />
        <h3>✿ 오늘의 감기를 선택해 주세요✿</h3>
        <table border>
          <tbody>
            <tr height="10" />
            <tr align="center">
              <td width="130">
                <Img src={happy} />
              </td>
              <td width="130">
                <Img src={joy} />
              </td>
              <td width="130">
                <Img src={love} />
              </td>
              <td width="130">
                <Img src={angry} />
              </td>
              <td width="130">
                <Img src={sad} />
              </td>
              <td width="130">
                <Img src={depress} />
              </td>
              <td width="130">
                <Img src={nervous} />
              </td>
              <td width="130">
                <Img src={nothing} />
              </td>
            </tr>
            <tr align="center">
              <td width="130">행복</td>
              <td width="130">기쁨</td>
              <td width="130">사랑</td>
              <td width="130">화남</td>
              <td width="130">슬픔</td>
              <td width="130">우울</td>
              <td width="130">불안</td>
              <td width="130">생각없음</td>
            </tr>
            <tr height="30" />

            <tr height="30" />
          </tbody>
        </table>
      </Box>
    </div>
  );
};

export default Emotion;
