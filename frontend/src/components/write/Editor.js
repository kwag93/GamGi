import styled from 'styled-components';
import Emotion from '../../pages/Emotion';

const TitleInput = styled.input`
  width: 80%;
  padding-bottom: 20px;
  border: none;
  font-size: 22px;
  border-bottom: solid 1px #ababab;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;

const Content = styled.textarea`
  padding-top: 20px;
  width: 80%;
  resize: none;
  border: none;
  height: 500px;
  &:focus {
    outline: none;
  }
`;

const Editor = ({ title, body, onChangeField }) => {
  const onChangeContent = (e) => {
    onChangeField({ key: 'body', value: e.target.value });
  };
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <div>
      <Emotion />
      <h3>✿ 오늘의 감정을 기록해 주세요✿</h3>
      <br />
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <Content
        placeholder="내용을 입력하세요"
        onChange={onChangeContent}
        value={body}
      />
    </div>
  );
};

export default Editor;
