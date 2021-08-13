import React from 'react';
import { Steps } from 'antd';
import HeaderContainer from '../containers/HeaderContainer';

const { Step } = Steps;

const ChallengePage = () => {
  return (
    <>
      <HeaderContainer />
      <h3>매일 30분 걷기</h3>
      <Steps direction="vertical" current={0}>
        <Step title="Day1" description="걷기 완료" />
        <Step title="Day2" description="걷기 완료" />
        <Step title="Day3" description="걷기 완료" />
        <Step title="Day4" description="걷기 완료" />
        <Step title="Day5" description="걷기 완료" />
        <Step title="Day6" description="걷기 완료" />
        <Step title="Day7" description="걷기 완료" />
      </Steps>
    </>
  );
};

export default ChallengePage;
