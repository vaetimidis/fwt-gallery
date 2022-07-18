import React from 'react';
import { PropTypes } from 'prop-types';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { PagiationItemStyled, PagiationStyled } from '#/styles/components/ui/pagination.style';

const Pagination = (props) => {
  const { page, pagination, callback } = props;

  const pages = React.useMemo(() => Math.ceil(pagination.total / pagination.limit), [pagination]);

  const handleClick = (v) => () => {
    if (v === 'down') if (page !== 1) callback(page - 1);
    if (v === 'up') if (page !== pages) callback(page + 1);
    if (v === 'first') callback(1);
    if (v === 'last') callback(pages);
  };

  return (
    <PagiationStyled isFirst={page === 1} isLast={page === pages}>
      <PagiationItemStyled className="left-arrow" onClick={handleClick('first')}>
        <AiOutlineDoubleLeft />
      </PagiationItemStyled>
      <PagiationItemStyled className="left-arrow" onClick={handleClick('down')}>
        <MdOutlineArrowBackIos />
      </PagiationItemStyled>

      <PagiationItemStyled className="left-arrow" onClick={handleClick('down')}>
        {page === 1 ? '' : page - 1}
      </PagiationItemStyled>
      <PagiationItemStyled>{page}</PagiationItemStyled>
      <PagiationItemStyled className="right-arrow" onClick={handleClick('up')}>
        {page === pages ? '' : page + 1}
      </PagiationItemStyled>

      <PagiationItemStyled className="right-arrow" onClick={handleClick('up')}>
        <MdOutlineArrowForwardIos />
      </PagiationItemStyled>
      <PagiationItemStyled className="right-arrow" onClick={handleClick('last')}>
        <AiOutlineDoubleRight />
      </PagiationItemStyled>
    </PagiationStyled>
  );
};

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pagination: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired
};
