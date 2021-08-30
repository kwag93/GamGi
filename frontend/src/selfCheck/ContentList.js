import React from 'react';
import dummy from '../db/data.json';

const ContentList = (props) => {
  const contentList = dummy.depressContent.filter(
    (content) => content.id === parseInt(props.keys) + 4,
  );
  return (
    <>
      {contentList.map((script, index) => (
        <Content header={script.header} body={script.body} key={index} />
      ))}
    </>
  );
};

const Content = ({ header, body }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>{header}</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;
