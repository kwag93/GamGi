import React from 'react';
import Header from '../components/common/Header';
import { Calendar, Badge } from 'antd';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  padding-right: 22rem;
  padding-left: 22rem;
`;

const ButtonBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const dateCellRender = (value) => {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item) => (
        <div key={item.content}>
          <Badge status={item.type} text={item.content} />
        </div>
      ))}
    </ul>
  );
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const monthCellRender = (value) => {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
};

const CalendarPage = () => {
  return (
    <div>
      <Header />
      <ButtonBlock>
        <WritePostButtonWrapper>
          <Button cyan to="/statistic">
          한 달 감정통계
          </Button>
        </WritePostButtonWrapper>
      </ButtonBlock>
      <Box>
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
        />
      </Box>
    </div>
  );
};

export default CalendarPage;
