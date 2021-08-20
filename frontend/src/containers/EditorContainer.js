import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/auth';
import { initialize } from '../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
