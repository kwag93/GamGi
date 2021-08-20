import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writePost } from '../modules/write';

const WriteButtonsContainer = ({ openModal, history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postErorr: write.postError,
  }));

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteButtons
      openModal={openModal}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default withRouter(WriteButtonsContainer);
