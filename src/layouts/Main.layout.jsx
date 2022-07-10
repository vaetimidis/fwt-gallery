import React from 'react';
import { PropTypes } from 'prop-types';

//* Styles
import { MainStyled } from '#/styles/layouts/main.style';

//* Component
import Header from '#/components/ui/header.component';

//* Custom hooks

/// ///////////////////////////////////////////////////////////////////////////////////
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <MainStyled>{children}</MainStyled>
    </>
  );
}
export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
