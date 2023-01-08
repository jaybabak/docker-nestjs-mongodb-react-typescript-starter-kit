import { FooterMenu } from '../nav';
import { AppBar, Container } from '@mui/material';
import './footer.css';

const Footer = () => (
  <AppBar component="footer" position="fixed" color="primary" 
    elevation={12}
    sx={{ 
      // backgroundColor: 'primary',
      top: 'auto',
      bottom: 0 
    }}>
      <Container>
        <FooterMenu />
      </Container> 
  </AppBar>
)

export default Footer