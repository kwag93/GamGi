import React from 'react';
import dummy from '../db/data.json';

const ContentList = (props) => {
  const contentList = dummy.depressContent.filter(
    (content) => content.id === parseInt(props.keys) + 4,
  );
  return (
    <>
      {contentList.map((script, index) => {
        return <Content header={script.header} body={script.body} />;
      })}
    </>
  );
};

const Content = ({ header, body }) => {
  return (
    <div>
      <table>
        <tr>{header}</tr>
        <tr>{body}</tr>
      </table>
    </div>
  );
};

export default ContentList;
