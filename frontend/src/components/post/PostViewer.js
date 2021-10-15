import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const Img = styled.img`
  width: 10%;
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const importAll = (imgs) => {
  let images = [];
  imgs.keys().forEach((item, index) => {
    images[index] = imgs(item);
  });
  return images;
};

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }
  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(-1);
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

  const { title, body, user, publishedDate, emotion } = post;
  return (
    <>
      <PostViewerBlock>
        {actionButtons}
        <PostHead>
          <h1>{title}</h1>
          {idx !== -1 ? <Img src={images[idx].default} /> : ''}
          <SubInfo hasMarginTop>
            <span>
              <b>{user.username}</b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
          </SubInfo>
        </PostHead>
        {body.split('\n').map((line, idx) => (
          <PostContent key={idx}>{line} </PostContent>
        ))}
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
