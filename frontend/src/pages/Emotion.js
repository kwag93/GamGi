import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Img = styled.img`
  width: 70%;
`;

const importAll = (r) => {
  let images = [];
  r.keys().forEach((item, index) => {
    images[index] = r(item);
  });
  return images;
};

// default 부분이 필요한지에 대한 의문이 조금 있음.
const Emotion = () => {
  const [images, setImages] = useState([]);
  const emotion_name = [
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
      importAll(require.context('../lib/images/emotions', false, /.png/)),
    );
  }, []);
  return (
    <div>
      <Box>
        <br />
        <h3>✿ 오늘의 감기를 선택해 주세요✿</h3>
        <table border>
          <tbody>
            <tr height="10" />
            <tr align="center">
              {images.map((img, index) => (
                <td width="130" key={index}>
                  <Img src={images[index].default} />
                </td>
              ))}
            </tr>
            <tr align="center">
              {emotion_name.map((emotion_name, idx) => (
                <td width="130" key={idx}>
                  {emotion_name}{' '}
                </td>
              ))}
            </tr>
            <tr height="30" />
            <tr height="30" />
          </tbody>
        </table>
      </Box>
    </div>
  );
};

export default Emotion;
