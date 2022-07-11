import React from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { PagiationItemStyled, PagiationStyled } from '../../styles/components/ui/pagination.style';

const Pagination = () => {
  return (
    <PagiationStyled>
      <PagiationItemStyled>
        <AiOutlineDoubleLeft />
      </PagiationItemStyled>
      <PagiationItemStyled>
        <MdOutlineArrowBackIos />
      </PagiationItemStyled>
      <PagiationItemStyled>1</PagiationItemStyled>
      <PagiationItemStyled>2</PagiationItemStyled>
      <PagiationItemStyled>3</PagiationItemStyled>
      <PagiationItemStyled>
        <MdOutlineArrowForwardIos />
      </PagiationItemStyled>
      <PagiationItemStyled>
        <AiOutlineDoubleRight />
      </PagiationItemStyled>
    </PagiationStyled>
  );
};

export default Pagination;
