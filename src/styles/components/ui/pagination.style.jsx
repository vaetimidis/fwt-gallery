import styled from '@emotion/styled';

export const PagiationStyled = styled.ul`
  display: flex;
  flex-direcion: row;
  list-style: none;
  margin-top: 40px;
`;

export const PagiationItemStyled = styled.li`
  width: 39px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  border: 1px solid black;
  border-right: none;
  color: black;
  background: inherit;
   &:first-of-type {
    border-radius: 8px 0 0 8px;
    cursor: pointer;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
    border-right: 1px solid;
    cursor: pointer;
  }
  &:only-child {
    border-radius: 8px;
  }
  &:hover {
    background: #ededed;
    color: black;
    border-color: black;
  }
  &:disabled {
    border-color: #b3b3b3;
    color: #b3b3b3;

    &:hover {
      cursor: auto;
      background: inherit;
    }

     &--dark {
    border: 1px solid white;
    color: white;
    border-right: none;

    &:hover {
      background: #464646;
      color: white;
      border-color: white;
    }
    &:disabled {
      border-color: #4c4c4c;
      color: #4c4c4c;
    }
  }
  &.PaginationPageWithActive {
    background: black;
    color: white;
    border-color: black;
    &:hover {
      cursor: auto;
      background: black;
      color: white;
      border-color: black;
    }
    &--dark {
      background: white;
      color: black;
      border-color: white;
      &:hover {
        background: white;
        color: black;
        border-color: white;
      }
    }
  }  
`;