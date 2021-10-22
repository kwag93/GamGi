import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  justify-content: flex-end;
  display: flex;
  Button + Button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  padding-right: 10px;
`;

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton>
        <Button onClick={onPublish}>다이어리 {isEdit ? '수정' : '등록'}</Button>
      </StyledButton>
      <StyledButton>
        <Button onClick={onCancel}>취소</Button>
      </StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
