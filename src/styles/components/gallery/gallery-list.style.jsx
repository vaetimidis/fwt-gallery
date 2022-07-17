import styled from '@emotion/styled';
import { breakpoint } from '#/utils/theme';

export const GalleryLoaderStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

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
  background-color: #ffffff75;
  height: 360px;
  ${breakpoint('xxl')} {
    height: 300px;
  }
  ${breakpoint('xl')} {
    height: 340px;
  }
  ${breakpoint('xs')} {
    height: 280px;
  }
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
  object-fit: cover;
`;

export const ItemFooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30px;
  background-color: #ffffff75;
  z-index: 20;

  &:hover {
    height: 145px;
    transition: 0.2s height ease-in;
    z-index: 20;
  }
  transition: 0.2s height ease-in;

  > h1 {
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    padding: 5px 0 0 15px;
    z-index: 20;
  }
  > div {
    color: #000000;
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    > span {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
    }
    > p {
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
    }
  }
`;
