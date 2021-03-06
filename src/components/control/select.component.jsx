import { useRef, useState } from 'react';

import { RiArrowDownSFill } from 'react-icons/ri';
import { PropTypes } from 'prop-types';
import useOutsideClick from '#/hooks/useOutsideClick';

//* componenets
import { SelectStyle } from '#/styles/components/control/select.style';

const Select = (props) => {
  const { arr, title, value, callback, onClose } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const openMenu = () => setIsOpen(true);

  const hideMenu = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  useOutsideClick(ref, hideMenu);

  const handleOnClick = (v) => (e) => {
    e.stopPropagation();
    callback(v);
    setIsOpen(false);
  };

  return (
    <SelectStyle isOpen={isOpen} ref={ref} onClick={isOpen ? hideMenu : openMenu}>
      <div className="select">
        <div>{value || title}</div>
      </div>
      <RiArrowDownSFill />
      {isOpen && (
        <div className="content">
          {arr.map((x) => {
            return (
              <div onClick={handleOnClick(x)} className="content-item" key={x.id}>
                {x.value}
              </div>
            );
          })}
        </div>
      )}
    </SelectStyle>
  );
};

export default Select;

Range.propTypes = {
  arr: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
