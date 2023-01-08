import { createContext } from 'react';
import { ThemeModeInterface } from "./ThemeModeInterface";

export const ThemeMode = createContext<ThemeModeInterface>({theme: false, toggleTheme: () => {}});