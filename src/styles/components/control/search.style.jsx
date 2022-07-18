import styled from '@emotion/styled';

export const SearchStyle = styled.input`
  width: 265px;
  height: 45px;
  font-size: 15px;
  border: ${({ theme }) => `1px solid ${theme.palette.color.text}`};
  color: ${({ theme }) => theme.palette.color.text};
  background-color: ${({ theme }) => theme.palette.bg.mainContent};
  border-bottom: ${({ isOpen, theme }) => isOpen && `1px solid ${theme.palette.color.subText}`};
  border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0 0' : '8px')};
`;
