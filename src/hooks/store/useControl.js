import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp, { fetchPaintings } from '#/store/slices/gallery.slice';
import { ApiStatus } from '#/utils/api';

// Control Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useControl = () => {
  const dispatch = useDispatch();

  const { setRange, setLocation, setAuthor, setPage } = bindActionCreators(
    ActionCreatorsApp.actions,
    dispatch
  );
  const { statusPaintings, range, authors, locations, location, author, page, pages } = useSelector(
    (state) => state.gallery
  );

  const handleOnChangeFrom = (value) => setRange({ valueFrom: value });
  const handleOnChangeBefore = (value) => setRange({ valueBefore: value });
  const handleOnChangeLocation = (value) => setLocation(value);
  const handleOnChangeAuthor = (value) => setAuthor(value);
  const handleOnChangePage = (value) => setPage(value);

  useEffect(() => {
    if (statusPaintings !== ApiStatus.NONE)
      dispatch(fetchPaintings({ authorId: author.id, _page: page }));
  }, [range, location, author, page]);

  return {
    location,
    author,
    page,
    range,
    pages,
    authors,
    locations,
    handleOnChangeFrom,
    handleOnChangeBefore,
    handleOnChangeLocation,
    handleOnChangeAuthor,
    handleOnChangePage
  };
};
