import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import love from '../lib/images/love.png';
import happy from '../lib/images/happy.png';
import depress from '../lib/images/depress.png';
import joy from '../lib/images/joy.png';
import angry from '../lib/images/angry.png';
import nervous from '../lib/images/nervous.png';
import nothing from '../lib/images/nothinking.png';
import sad from '../lib/images/sad.png';

const Block = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .br {
    border: 1px;
  }
`;

const Img = styled.img`
  width: 18%;
  height: 18%;
`;

const ImgBlock = styled.div`
  width: 50%;
  height: 50%;
`;

const Emotion = () => {
  return (
    <div>
      <Header />
      <Block>
        <h2>✿ 오늘의 감기 ✿</h2>
        <br />
        <h3>감정을 선택해주세요</h3>
        <ImgBlock>
          <table border-collapse="separate" border-spacing="0 10px">
            <tbody>
              <tr>
                <td>
                  <Img src={happy} />
                  <Img src={joy} />
                  <Img src={love} />
                  <Img src={angry} />
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Img src={sad} />
                  <Img src={depress} />
                  <Img src={nervous} />
                  <Img src={nothing} />
                </td>
              </tr>
            </tbody>
          </table>
        </ImgBlock>
        <Button> - </Button>
      </Block>
    </div>
  );
};

export default Emotion;
