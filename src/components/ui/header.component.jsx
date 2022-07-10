import React from 'react';

//* icons
import { BsSunFill, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

//* styles
import {
  HeaderContentStyled,
  HeaderNavStyled,
  HeaderStyled,
  HeaderUlStyled
} from '#/styles/components/ui/header.style';

import useTheme from '#/hooks/useTheme';

const themeIcon = new Map([
  ['light', <BsSunFill key={1} />],
  ['dark', <BsSun key={2} />]
]);

// Header components
//* ------------------------------------------------------------------------------------------ *//
const Header = () => {
  const { themeContext, setThemeContext } = useTheme();

  const handleClickTheme = () => {
    const arr = ['light', 'dark'];
    const i = arr.indexOf(themeContext);
    setThemeContext(arr[i === arr.length - 1 ? 0 : i + 1]);
  };

  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <HeaderNavStyled>
          <HeaderUlStyled>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <li onClick={handleClickTheme}>{themeIcon.get(themeContext)}</li>
          </HeaderUlStyled>
        </HeaderNavStyled>
      </HeaderContentStyled>
    </HeaderStyled>
  );
};

export default Header;
