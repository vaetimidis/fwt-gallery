import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: ${({ theme }) => theme.palette.height.headerHeight};
  > svg {
    fill: ${({ theme }) => theme.palette.bg.header};
    transform: rotate(180deg);
    z-index: 5;
    width: 100%;
    height: ${({ theme }) => theme.palette.height.footer};
  }
`;

export const HeaderContentStyled = styled.div`
  background-color: ${({ theme }) => theme.palette.bg.header};
  height: ${({ theme }) => theme.palette.height.content};
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderNavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderUlStyled = styled.ul`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.color.header};
  margin: 0;
  padding: 0;
  li {
    display: flex;
    cursor: pointer;
    align-items: center;
    list-style: none;
    justify-content: center;
    width: 64px;
    height: 64px;
    > svg {
      fill: ${({ theme }) => theme.palette.color.headerIcon};

      width: 24px;
      height: 24px;
    }
    > a {
      > svg {
        width: 64px;
        height: 64px;
      }
      text-decoration: none;
      color: ${({ theme }) => theme.palette.color.header};
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        color: ${({ theme }) => theme.palette.color.headerIcon};
        transition: all 0.2s ease-in;
      }
      transition: all 0.2s ease-out;
    }

    &:first-of-type {
      margin-right: auto;
      width: 100%;
      justify-content: flex-start;
    }
  }
`;
