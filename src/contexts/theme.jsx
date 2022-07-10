import React, { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider as ThemeEmotionProvider } from '@emotion/react';
import { theme, themeDark } from '#/utils/theme';

export const ThemeContext = createContext(null);

export const themes = {
  light: theme,
  dark: themeDark
};

// Theme layout provider setup
//* ------------------------------------------------------------------------------------------ *//
function ThemeProvider({ children }) {
  const [themeContext, setThemeContext] = useState(localStorage.getItem('__THEME__') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeContext);
    localStorage.setItem('__THEME__', themeContext);
  }, [themeContext]);

  return (
    <ThemeEmotionProvider theme={themes[themeContext]}>
      <ThemeContext.Provider value={{ themeContext, setThemeContext }}>
        {children}
      </ThemeContext.Provider>
    </ThemeEmotionProvider>
  );
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
