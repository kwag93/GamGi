import React, { useEffect, useState } from 'react';
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

const Img = styled.img`
  width: 10%;
`;

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

const importAll = (imgs) => {
  let images = [];
  imgs.keys().forEach((item, index) => {
    images[index] = imgs(item);
  });
  return images;
};

const PostItem = ({ post }) => {
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(-1);

  const { publishedDate, user, title, body, emotion, _id } = post;
  const emotion_names = [
    '행복',
    '기쁨',
    '사랑',
    '화남',
    '슬픔',
    '우울',
    '불안',
    '생각없음',
  ];

  useEffect(() => {
    setImages(
      importAll(require.context('../../lib/images/emotions', false, /.png/)),
    );
    setIdx(emotion_names.indexOf(emotion));
  }, []);

  return (
    <PostItemBlock>
      <StyledContent>
        <h2>
          <Link to={`/@${user.username}/${_id}`}>{title}</Link>
        </h2>
        {idx !== -1 ? <Img src={images[idx].default} /> : ''}
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
