import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreatorsApp from '#/store/slices/gallery.slice';

// Control Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useControl = () => {
  const dispatch = useDispatch();

  const { setRange } = bindActionCreators(ActionCreatorsApp.actions, dispatch);
  const { range, authors, locations } = useSelector((state) => state.gallery);

  const handleOnChangeFrom = (value) => setRange({ valueFrom: value });
  const handleOnChangeBefore = (value) => setRange({ valueBefore: value });

  return { range, authors, locations, handleOnChangeFrom, handleOnChangeBefore };
};
