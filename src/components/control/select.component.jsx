import { useRef, useState } from 'react';

import { RiArrowDownSFill } from 'react-icons/ri';
import { PropTypes } from 'prop-types';
import useOutsideClick from '#/hooks/useOutsideClick';

//* componenets
import { SelectStyle } from '#/styles/components/control/select.style';

const Select = (props) => {
  const { arr, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const openMenu = () => setIsOpen(true);

  const hideMenu = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  useOutsideClick(ref, hideMenu);

  return (
    <SelectStyle isOpen={isOpen} ref={ref} onClick={isOpen ? hideMenu : openMenu}>
      <div className="select">
        <div>{title}</div>
      </div>
      <RiArrowDownSFill />
      {isOpen && (
        <div className="content" onClick={(e) => e.stopPropagation()}>
          {arr.map((x) => {
            return (
              <div className="content-item" key={x.id}>
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
  title: PropTypes.string.isRequired
};
