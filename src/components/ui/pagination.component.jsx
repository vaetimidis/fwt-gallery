import React from 'react';
import { PagiationItemStyled, PagiationStyled } from '../../styles/components/ui/pagination.style';

const Pagination = () => {
  return (
    <PagiationStyled>
      <PagiationItemStyled>1</PagiationItemStyled>
      <PagiationItemStyled>2</PagiationItemStyled>
      <PagiationItemStyled>3</PagiationItemStyled>
      <PagiationItemStyled>4</PagiationItemStyled>
    </PagiationStyled>
  );
};

export default Pagination;
