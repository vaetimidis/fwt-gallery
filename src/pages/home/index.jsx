import React from 'react';
import ControlPanel from '../../components/control/control-panel.component';
import GalleryList from '../../components/gallery/gallery-list.component';
import Pagination from '../../components/ui/pagination.component';

//* componenets

//* styles

//* custom hook

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home = () => {
  return (
    <div>
      <ControlPanel />
      <GalleryList />
      <Pagination />
    </div>
  );
};

export default Home;
