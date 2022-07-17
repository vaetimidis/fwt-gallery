import styled from '@emotion/styled';
// import { breakpoint } from '#/utils/theme';

export const SelectStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 30;

  height: 46px;
  width: 265px;
  line-height: 15px;
  border-radius: 8px;
  cursor: pointer;

  .select {
    width: 100%;
    height: 100%;

    border: ${({ theme }) => `1px solid ${theme.palette.color.text}`};
    color: ${({ theme }) => theme.palette.color.text};
    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border-bottom: ${({ isOpen, theme }) => isOpen && `1px solid ${theme.palette.color.subText}`};
    border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0 0' : '8px')};
    padding-right: 50px;
    overflow: hidden;

    > div {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .content {
    position: absolute;
    width: 100%;
    top: 46px;
    padding: 10px;
    border-radius: 0 0 8px 8px;
    font-weight: 500;
    font-size: 16px;
    height: 400px;
    overflow-x: scroll;

    background-color: ${({ theme }) => theme.palette.bg.mainContent};
    border: ${({ theme }) => `1px solid ${theme.palette.color.text}`};
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'block')};
    border-top: ${({ isOpen, theme }) =>
      isOpen ? 'none' : `1px solid ${theme.palette.color.text}`};

    flex-direction: column;
    gap: 15px;

    .content-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
