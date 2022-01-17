import { createTheme } from '@mui/material';
import config from './contexts/app-config/config.json';

/**
 * The custom application theme.
 */
export const theme = createTheme({
  ...config.website.theme,
});
