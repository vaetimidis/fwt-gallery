import React from 'react';
import { PropTypes } from 'prop-types';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { PagiationItemStyled, PagiationStyled } from '#/styles/components/ui/pagination.style';

const Pagination = (props) => {
  const { page, pages, callback } = props;

  const handleClick = (v) => () => {
    if (v === 'down') if (page !== 1) callback(page - 1);
    if (v === 'up') if (page !== pages) callback(page + 1);
    if (v === 'first') callback(1);
    if (v === 'last') callback(page - 1);
  };

  return (
    <PagiationStyled>
      <PagiationItemStyled onClick={handleClick('first')}>
        <AiOutlineDoubleLeft />
      </PagiationItemStyled>
      <PagiationItemStyled onClick={handleClick('down')}>
        <MdOutlineArrowBackIos />
      </PagiationItemStyled>
      <PagiationItemStyled onClick={handleClick('down')}>
        {page === 1 ? '' : page - 1}
      </PagiationItemStyled>
      <PagiationItemStyled>{page}</PagiationItemStyled>
      <PagiationItemStyled onClick={handleClick('up')}>
        {page === pages ? '' : page + 1}
      </PagiationItemStyled>
      <PagiationItemStyled onClick={handleClick('up')}>
        <MdOutlineArrowForwardIos />
      </PagiationItemStyled>
      <PagiationItemStyled onClick={handleClick('last')}>
        <AiOutlineDoubleRight />
      </PagiationItemStyled>
    </PagiationStyled>
  );
};

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
};
