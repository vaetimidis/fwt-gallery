import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp, { fetchPaintings } from '#/store/slices/gallery.slice';
import { api } from '#/utils/api';
import debounce from '#/utils/debounce';

// Gallery Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useGallery = () => {
  const dispatch = useDispatch();

  const { init } = bindActionCreators(ActionCreatorsApp.actions, dispatch);
  const { q, author, page, range, location, isInit, ...props } = useSelector(
    (state) => state.gallery
  );

  const memoParams = useMemo(() => {
    return {
      q,
      locationId: location.id,
      authorId: author.id,
      _page: page,
      created_gte: range.valueFrom,
      created_lte: range.valueBefore
    };
  }, [q, author, page, range, location]);

  const fetcher = (params) =>
    dispatch(
      fetchPaintings({
        ...params
      })
    );

  const rangeFetcher = useCallback(debounce(fetcher, 400), []);
  const valueFetcher = useCallback(debounce(fetcher, 1000), []);

  useEffect(() => {
    Promise.all([api().gallery.getAuthors(), api().gallery.getLocations()]).then((value) => {
      init({ authors: value[0], locations: value[1] });
      dispatch(
        fetchPaintings({
          _page: page
        })
      );
    });
  }, []);

  useEffect(() => {
    if (isInit) fetcher(memoParams);
  }, [author, page, location]);

  useEffect(() => {
    if (isInit) rangeFetcher(memoParams);
  }, [range]);

  useEffect(() => {
    if (isInit) valueFetcher(memoParams);
  }, [q]);

  return { q, author, page, range, location, isInit, ...props };
};
