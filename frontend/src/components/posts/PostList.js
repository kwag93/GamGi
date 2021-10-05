import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import { Link } from 'react-router-dom';
import LoginModal from '../common/LoginModal';
import { Layout } from 'antd';
import Respones from '../common/Respones';
import Responsive from '../common/Responsive';

const { Content } = Layout;

const BackgroundBlock = styled.div`
  background-image: url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80');
`;

const PostListBlock = styled(Respones)`
  margin-top: 3rem;
`;

const ButtonBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
  a {
    color: black;
  }
`;

const StyledContent = styled(Content)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: 'initial';
  border: 2px solid ${palette.gray[6]};
  border-radius: 10px;
  padding: 3rem;
  background-size: cover;
  background-repeat: no repeat;
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, title, body, _id } = post;
  console.log(body);
  return (
    <PostItemBlock>
      <StyledContent>
        <h2>
          <Link to={`/@${user.username}/${_id}`}>{title}</Link>
        </h2>
        <SubInfo
          username={user.username}
          publishedDate={new Date(publishedDate)}
        />
        <p>{body}</p>
      </StyledContent>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  if (!showWriteButton) return <LoginModal />;
  return (
    <BackgroundBlock>
      <ButtonBlock>
        <WritePostButtonWrapper>
          {showWriteButton && (
            <Button cyan to="/write">
              새 글 작성하기
            </Button>
          )}
        </WritePostButtonWrapper>
      </ButtonBlock>
      <PostListBlock>
        {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
        {!loading && posts && (
          <div>
            {posts.map((post) =>
              post.user.username === showWriteButton.username ? (
                <PostItem post={post} key={post._id} />
              ) : null,
            )}
          </div>
        )}
      </PostListBlock>
    </BackgroundBlock>
  );
};

export default PostList;
