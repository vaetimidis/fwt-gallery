import styled from '@emotion/styled';

export const MainStyled = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  z-index: 10;
  padding-top: ${({ theme }) => theme.palette.height.headerHeight};
  min-height: 100vh;
  height: 100%;
  max-width: 1200px;
`;
