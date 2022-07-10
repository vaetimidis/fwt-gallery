import { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { RiArrowDownSFill } from 'react-icons/ri';
import useOutsideClick from '#/hooks/useOutsideClick';
import { RangeStyle } from '#/styles/components/control/range.style';

const Range = (props) => {
  const { onClose, handleFrom, handleBefore, range } = props;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const openMenu = () => setIsOpen(true);

  const hideMenu = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  useOutsideClick(ref, hideMenu);

  return (
    <RangeStyle isOpen={isOpen} ref={ref} onClick={isOpen ? hideMenu : openMenu}>
      <div className="range">
        <div>Choose values</div>
      </div>
      <RiArrowDownSFill />
      {isOpen && (
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <input
            placeholder="from"
            onChange={(e) => handleFrom(e.target.value)}
            value={range.valueFrom}
          />
          <div className="separator" />
          <input
            placeholder="before"
            onChange={(e) => handleBefore(e.target.value)}
            value={range.valueBefore}
          />
        </div>
      )}
    </RangeStyle>
  );
};

export default Range;

Range.propTypes = {
  onClose: PropTypes.func,
  handleFrom: PropTypes.func.isRequired,
  handleBefore: PropTypes.func.isRequired,
  range: PropTypes.object.isRequired
};
