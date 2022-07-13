import React from 'react';
import { PropTypes } from 'prop-types';
import {
  GalleryListItemStyle,
  GalleryListStyle,
  GalleryListWrapperStyle
} from '#/styles/components/gallery/gallery-list.style';
import {
  GalleryImgStyle,
  ItemFooterStyle
} from '../../styles/components/gallery/gallery-list.style';

const GalleryList = (props) => {
  const { paintings, authors, locations } = props;

  return (
    <GalleryListStyle>
      {paintings.map((x) => {
        return (
          <GalleryListItemStyle key={x}>
            <GalleryListWrapperStyle>
              <GalleryImgStyle src={`https://test-front.framework.team/${x.imageUrl}`} />
              <ItemFooterStyle>
                <h1>{x.name}</h1>
                <div>
                  <span>Author: </span>
                  <p>{authors.find((y) => y.id === x.authorId).name}</p>
                </div>
                <div>
                  <span>Created: </span>
                  <p>{x.created}</p>
                </div>
                <div>
                  <span>Location: </span>
                  <p>{locations.find((z) => z.id === x.locationId).location}</p>
                </div>
              </ItemFooterStyle>
            </GalleryListWrapperStyle>
          </GalleryListItemStyle>
        );
      })}
    </GalleryListStyle>
  );
};

export default GalleryList;

GalleryList.propTypes = {
  paintings: PropTypes.object.isRequired,
  authors: PropTypes.object.isRequired,
  locations: PropTypes.object.isRequired
};
