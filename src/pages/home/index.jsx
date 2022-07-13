import React from 'react';

//* componenets
import GalleryList from '#/components/gallery/gallery-list.component';
import ControlPanel from '#/components/control/control-panel.component';
import Pagination from '#/components/ui/pagination.component';

//* styles

//* custom hook
import { useGallery } from '#/hooks/store/useGallery';
import { ApiStatus } from '../../utils/api';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home = () => {
  const { paintings, authors, locations, status } = useGallery();

  return status !== ApiStatus.PENDING ? (
    <div>
      <ControlPanel />
      <GalleryList paintings={paintings} authors={authors} locations={locations} />
      <Pagination />
    </div>
  ) : null;
};

export default Home;
