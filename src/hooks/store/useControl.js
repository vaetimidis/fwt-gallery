import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp from '#/store/slices/gallery.slice';

// Control Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useControl = () => {
  const dispatch = useDispatch();

  const { setRange, setLocation, setAuthor, setPage, setSearch } = bindActionCreators(
    ActionCreatorsApp.actions,
    dispatch
  );
  const { author, page, range, ...props } = useSelector((state) => state.gallery);

  const handleOnChangeRange = (value) => setRange(value);
  const handleOnChangeLocation = (value) => setLocation(value);
  const handleOnChangeAuthor = (value) => setAuthor(value);
  const handleOnChangePage = (value) => setPage(value);
  const handleOnChangeSearch = (value) => setSearch(value);

  return {
    ...props,
    author,
    page,
    range,
    handleOnChangeRange,
    handleOnChangeLocation,
    handleOnChangeAuthor,
    handleOnChangePage,
    handleOnChangeSearch
  };
};
