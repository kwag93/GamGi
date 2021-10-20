import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Layout } from 'antd';
import Respones from '../common/Respones';

const { Content } = Layout;

const PostViewerBlock = styled(Respones)`
  margin-top: 4rem;
  background-image: url('https://i.pinimg.com/564x/3c/1c/ab/3c1cabb4b75256b7a4ec508e6c02d2d3.jpg');
`;
const BottomLine = styled.div`
  border-bottom: 1px solid ${palette.gray[3]};
  margin-bottom: 2rem;
`;

const PostHead = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const Img = styled.img`
  width: 18%;
`;

const ImgBlock = styled(Content)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: 'initial';
  float: 'right';
  padding: 3rem;
`;

const ContentBlock = styled(Content)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: 'initial';
  padding: 3rem;
  float: left;
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
  font-size: 1.25rem;
  color: ${palette.gray[8]};
  float: left;
  padding: 0rem 3rem 2rem 3rem;
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
        <ContentBlock>
          <PostHead>
            <h1>{title}</h1>
            <SubInfo hasMarginTop>
              <span>
                <b>{user.username}</b>
              </span>
              <span>{new Date(publishedDate).toLocaleDateString()}</span>
            </SubInfo>
          </PostHead>
        </ContentBlock>
        <ImgBlock>
          {idx !== -1 ? <Img src={images[idx].default} /> : ''}
        </ImgBlock>
        <BottomLine />
        {body.split('\n').map((line, idx) => (
          <PostContent key={idx}>{line} </PostContent>
        ))}
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
