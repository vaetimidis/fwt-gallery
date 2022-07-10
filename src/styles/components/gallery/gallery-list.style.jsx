import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const GalleryListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-top: 45px;
`;

export const GalleryListItemStyle = styled.li`
  padding: 10px;
  height: 100px;
  width: 100%;
  ${breakpoint('md')} {
    width: 50%;
  }
  ${breakpoint('xl')} {
    width: 33.33%;
  }
`;

export const GalleryListWrapperStyle = styled.div`
  position: relative;
  background-color: #ffbbee;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const GalleryImgStyle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ItemFooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 20px;
  background-color: #000;
  z-index: 20;

  &:hover {
    height: 45px;
    transition: 0.2s height ease-in;
  }
  transition: 0.2s height ease-in;
`;
