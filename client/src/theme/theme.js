import { createTheme } from '@mui/material/styles';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const DarkTheme = createTheme(darkTheme);
const LightTheme = createTheme(lightTheme);

export { LightTheme, DarkTheme };