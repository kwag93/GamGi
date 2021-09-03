import React from 'react';
import dummy from '../db/stressData.json';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const ListBox = styled.div`
  width: 80rem;
  background: white;
  border: 1px solid ${palette.gray[5]};
  border-radius: 10px;
  padding: 3rem;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const StressList = (props) => {
  const StressList = dummy.stressContent.filter(
    (content) => content.id === parseInt(props.keys) + 4,
  );
  return (
    <>
      {StressList.map((script, index) => (
        <Content header={script.header} body={script.body} key={index} />
      ))}
    </>
  );
};

const Content = ({ header, body }) => {
  return (
    <div>
      <ListBox>
        <table>
          <thead>
            <tr>
              <td>{header}</td>
            </tr>
          </thead>
          <BottomLine />
          <tbody>
            <tr>
              <td>{body}</td>
            </tr>
          </tbody>
        </table>
      </ListBox>
    </div>
  );
};

export default StressList;
