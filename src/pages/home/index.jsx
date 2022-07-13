import React from 'react';

//* componenets
import GalleryList from '#/components/gallery/gallery-list.component';
import ControlPanel from '#/components/control/control-panel.component';
import Pagination from '#/components/ui/pagination.component';

//* styles

//* custom hook
import { useGallery } from '#/hooks/store/useGallery';
import { useAuthors } from '#/hooks/store/useAuthors';

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home = () => {
  const { paintings } = useGallery();
  const { authors } = useAuthors();

  return (
    <div>
      <ControlPanel />
      <GalleryList paintings={paintings} authors={authors} />
      <Pagination />
    </div>
  );
};

export default Home;
