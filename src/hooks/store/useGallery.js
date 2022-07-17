import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp, { fetchGallery } from '#/store/slices/gallery.slice';

// Gallery Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useGallery = () => {
  const dispatch = useDispatch();

  const {} = bindActionCreators(ActionCreatorsApp.actions, dispatch);
  const { status, statusPaintings, error, paintings, authors, locations, page } = useSelector(
    (state) => state.gallery
  );

  useEffect(() => {
    dispatch(fetchGallery({ authorId: page }));
  }, []);

  return { status, statusPaintings, error, paintings, authors, locations };
};
