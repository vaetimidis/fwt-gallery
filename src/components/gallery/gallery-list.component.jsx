import React from 'react';
import {
  GalleryListItemStyle,
  GalleryListStyle,
  GalleryListWrapperStyle
} from '#/styles/components/gallery/gallery-list.style';

const GalleryList = () => {
  return (
    <GalleryListStyle>
      {[...Array(10)].map((x) => {
        return (
          <GalleryListItemStyle key={x}>
            <GalleryListWrapperStyle>asd</GalleryListWrapperStyle>
          </GalleryListItemStyle>
        );
      })}
    </GalleryListStyle>
  );
};

export default GalleryList;
