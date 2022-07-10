import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp, { fetchGallery } from '#/store/slices/gallery.slice';

// Gallery Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useGallery = () => {
  const dispatch = useDispatch();

  const {} = bindActionCreators(ActionCreatorsApp.actions, dispatch);
  const { status, error, range, paintings } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [range]);

  return { status, error, paintings };
};
