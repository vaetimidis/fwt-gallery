import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

//* componenets
import GalleryList from '#/components/gallery/gallery-list.component';
import ControlPanel from '#/components/control/control-panel.component';
import Pagination from '#/components/ui/pagination.component';

//* styles
import { GalleryLoaderStyle } from '#/styles/components/gallery/gallery-list.style.jsx';

//* custom hook
import { useGallery } from '#/hooks/store/useGallery';
import { useControl } from '#/hooks/store/useControl';
import { ApiStatus } from '#/utils/api';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home = () => {
  const { paintings, authors, locations, status, isInit } = useGallery();
  const { page, pagination, handleOnChangePage } = useControl();

  if (!isInit) {
    return (
      <GalleryLoaderStyle>
        <BallTriangle height="100" width="100" color="grey" ariaLabel="loading-indicator" />
      </GalleryLoaderStyle>
    );
  }

  return (
    <div>
      <ControlPanel />
      {status === ApiStatus.FULFILLED ? (
        <GalleryList paintings={paintings} authors={authors} locations={locations} />
      ) : (
        <GalleryLoaderStyle>
          <BallTriangle height="100" width="100" color="grey" ariaLabel="loading-indicator" />
        </GalleryLoaderStyle>
      )}
      {paintings.length ? (
        <Pagination page={page} pagination={pagination} callback={handleOnChangePage} />
      ) : null}
    </div>
  );
};

export default Home;
