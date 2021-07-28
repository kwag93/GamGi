import React from "react";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import styled from "styled-components";
import { Col, Row } from 'antd';

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


const Emotion = () => {
    return (
      <div>
        <Header />
        <Block>
          <h2>✿ 오늘의 감기 ✿</h2>
          <br />
          <h3>감정을 선택해주세요</h3>
          <div style={{height: "500px"}}>
          <Row gutter={[16, 16]}>
            <Col span={8} />
            <Col span={8} />
            <Col span={8} />

            <Col span={8} />
            <Col span={8} />
            <Col span={8} />
          </Row>
          </div> 
          <Button> -> </Button>
        </Block>
      </div>
    );
  };
  
export default Emotion;
  