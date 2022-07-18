import { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { RiArrowDownSFill } from 'react-icons/ri';
import useOutsideClick from '#/hooks/useOutsideClick';
import { RangeStyle } from '#/styles/components/control/range.style';

const Range = (props) => {
  const { onClose, callback, range } = props;
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
            onChange={(e) =>
              callback({
                valueFrom: e.target.value,
                valueBefore: range.valueBefore < e.target.value ? e.target.value : range.valueBefore
              })
            }
            value={range.valueFrom}
          />
          <div className="separator" />
          <input
            placeholder="before"
            onChange={(e) => callback({ ...range, valueBefore: e.target.value })}
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
  range: PropTypes.object,
  callback: PropTypes.func.isRequired
};
