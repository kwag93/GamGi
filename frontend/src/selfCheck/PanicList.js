import React from 'react';
import dummy from '../db/panicData.json';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const ListBox = styled.div`
  width: 70rem;
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

const panicList = (props) => {
  const panicList = dummy.panicContent.filter(
    (content) => content.id === parseInt(props.keys) + 4,
  );
  return (
    <>
      {panicList.map((script, index) => (
        <Content header={script.header} body={script.body} key={index} />
      ))}
    </>
  );
};

const Content = ({ header, body }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{header}</th>
          </tr>
        </thead>
      </table>
      <BottomLine />
      <table>
        <tbody>
          <tr>
            <td>{body}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default panicList;
