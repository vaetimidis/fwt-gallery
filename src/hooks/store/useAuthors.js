import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp, { fetchAuthors } from '#/store/slices/authors.slice';

// Gallery Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useAuthors = () => {
  const dispatch = useDispatch();

  const {} = bindActionCreators(ActionCreatorsApp.actions, dispatch);
  const { status, error, range, name } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [range]);

  return { status, error, name };
};
