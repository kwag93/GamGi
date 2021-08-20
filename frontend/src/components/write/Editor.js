import styled from 'styled-components';

const TitleInput = styled.input`
  width: 65%;
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
  width: 65%;
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
    <>
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
    </>
  );
};

export default Editor;
