import React from 'react';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import love from '../lib/images/loveheart.png';

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
  width: 30%;
  height: 30%;
`;

const ImgBlock = styled.div`
  width: 70%;
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
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8} lg={6}>
              <Img src={love} />
              <Img src={love} />
              <Img src={love} />
              <Img src={love} />
              <Img src={love} />
              <Img src={love} />
            </Col>
          </Row>
        </ImgBlock>
        <Button> - </Button>
      </Block>
    </div>
  );
};

export default Emotion;
