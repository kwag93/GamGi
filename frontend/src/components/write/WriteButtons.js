import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 30px;
  width: 120px;
  padding: 5px;
  border: solid 1px #ababab;
  background-color: white;
`;

const WriteButtons = ({ onCancel, onPublish }) => {
  return (
    <>
      <StyledButton onClick={onPublish}>포스트 등록</StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </>
  );
};

export default WriteButtons;
