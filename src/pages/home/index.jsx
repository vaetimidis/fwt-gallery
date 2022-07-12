import React from 'react';

//* componenets
import GalleryList from '#/components/gallery/gallery-list.component';
import ControlPanel from '#/components/control/control-panel.component';
import Pagination from '#/components/ui/pagination.component';

//* styles

//* custom hook
import { useGallery } from '#/hooks/store/useGallery';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home = () => {
  const { paintings } = useGallery();

  return (
    <div>
      <ControlPanel />
      <GalleryList paintings={paintings} />
      <Pagination />
    </div>
  );
};

export default Home;
