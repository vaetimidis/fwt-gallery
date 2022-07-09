import { useContext } from 'react';
import { ThemeContext } from '#/contexts/theme';

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('Missing ThemeContext');
  }

  return theme;
};

export default useTheme;
