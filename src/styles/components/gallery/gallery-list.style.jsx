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
`;

export const GalleryListWrapperStyle = styled.div`
  background-color: #ffbbee;
  width: 100%;
  height: 100%;
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
