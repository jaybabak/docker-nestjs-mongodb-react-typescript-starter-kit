import { AppBar, Container, useMediaQuery, useTheme } from '@mui/material';
import { MainMenu, SideBarMenu } from '../nav';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const MobileContainer = () => {
    return (
      <div className='mobile-container'>
          <SideBarMenu/>
      </div>
    )
  };

  return (
    <AppBar
      component="header"
      position="static"
      elevation={12}
      sx={{
        backgroundColor: '#269398',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container disableGutters>
        {isMobile ? (<MobileContainer/>) : (<MainMenu/>)}
      </Container>
    </AppBar>
  )
}

export default Header