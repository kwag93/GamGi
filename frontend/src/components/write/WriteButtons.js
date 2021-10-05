import styled from 'styled-components';

const WriteActionButtonsBlock = styled.div`
  justify-content: flex-end;
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  width: 120px;
  padding: 5px;
  border: solid 1px #ababab;
  background-color: white;
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 {isEdit ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
