import React from 'react';

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
