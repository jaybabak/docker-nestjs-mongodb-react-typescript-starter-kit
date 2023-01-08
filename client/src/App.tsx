import { useState } from 'react';
import { useMediaQuery, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/Auth/AuthProvider';
import { ThemeModeInterface } from './context/ThemeMode/ThemeModeInterface';
import { ThemeMode } from './context/ThemeMode/ThemeMode';
import { LightTheme, DarkTheme } from './theme/theme';
import Homepage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import SpacePage from './pages/Space/SpacePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { TokenStorage } from './services';
import './App.css';


function App() {

  const token:boolean = TokenStorage.getInstance().getAccessToken() ? true : false
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setTheme] = useState(prefersDarkMode);

  const themeContext: ThemeModeInterface = {
    theme: themeMode,
    toggleTheme: setTheme
  };

  const theme = createTheme(themeContext.theme ? DarkTheme : LightTheme);

  return (
    <div className="App">
      <AuthProvider defaultAuthenticated={token}>
        <ThemeMode.Provider value={themeContext}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header/>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path=":spaceSlug" element={<SpacePage />} />
            </Routes>
            <Footer/>
          </ThemeProvider>
        </ThemeMode.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
