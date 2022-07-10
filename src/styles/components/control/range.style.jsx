import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const RangeStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 46px;
  width: 265px;
  line-height: 15px;
  border-radius: 8px;
  cursor: pointer;

  .range {
    width: 100%;
    height: 100%;

    border: ${({ theme }) => `1px solid ${theme.palette.color.text}`};
    color: ${({ theme }) => theme.palette.color.text};
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border-bottom: ${({ isOpen, theme }) => isOpen && `1px solid ${theme.palette.color.subText}`};
    border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0 0' : '8px')};

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 10px;
    }
  }

  .content {
    position: absolute;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    top: 46px;
    padding: 20px 22px;
    border-radius: 0 0 8px 8px;
    z-index: 1;

    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: ${({ theme }) => `1px solid ${theme.palette.color.text}`};
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'block')};
    border-top: ${({ isOpen, theme }) =>
      isOpen ? 'none' : `1px solid ${theme.palette.color.text}`};

    flex-direction: column;
    gap: 15px;
    ${breakpoint('md')} {
      flex-direction: row;
      gap: 10px;
    }

    .separator {
      min-width: 10px;
      height: 2px;
      background-color: ${({ theme }) => theme.palette.bg.rangeInput};
    }

    > input {
      min-width: 50px;
      width: 100%;
      height: 45px;
      border: none;
      outline: none;
      border-radius: 8px;
      padding: 10px;
      box-sizing: border-box;
      user-select: none;

      background-color: ${({ theme }) => theme.palette.bg.rangeInput};
      ::placeholder {
        color: ${({ theme }) => theme.palette.bg.text};
      }
    }
  }

  > svg {
    position: absolute;
    display: flex;
    right: 18px;
    float: right;
    fill: #b3b3b3;
    width: 24px;
    height: 24px;
  }
`;
