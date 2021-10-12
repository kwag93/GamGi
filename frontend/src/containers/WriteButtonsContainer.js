import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WriteActionButtons from '../components/write/WriteButtons';
import { writePost, updatePost } from '../modules/write';

const WriteButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, emotion, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      emotion: write.emotion,
      post: write.post,
      postErorr: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, emotion, id: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        emotion,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButtons
      //   openModal={openModal}
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteButtonsContainer);
