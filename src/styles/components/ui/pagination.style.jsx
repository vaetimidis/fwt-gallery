import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const PagiationStyled = styled.ul`
  display: flex;
  flex-direcion: row;
  list-style: none;
  margin-top: 40px;
  ${breakpoint('sm')} {
    display: flex;
    padding: 0;
  }
`;

export const PagiationItemStyled = styled.li`
  width: 39px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.palette.color.text}`};
  border-right: none;
  color: ${({ theme }) => theme.palette.color.text};
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
    background-color: ${({ theme }) => theme.palette.bg.rangeInput};

    border-color: black;
  }
  &:disabled {
    border-color: #b3b3b3;
    color: #b3b3b3;
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.bg.header};
    color: ${({ theme }) => theme.palette.color.text};
  }
`;
