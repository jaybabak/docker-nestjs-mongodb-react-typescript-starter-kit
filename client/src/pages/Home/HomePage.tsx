import { Box, Button, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ProgressBar } from '../../components/global';
import { AuthClient } from '../../services';
import heroImage from '../../assets/images/landing-pages/blue-imaginary-box-3d.jpeg';
import './HomePage.scss';

function Homepage() {  
  const [loading, setLoading] = useState(true);
  const [posts, setData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response:Promise<string> | any = await AuthClient.getInstance().getHomepage();
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      return true;
    }

    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return (<ProgressBar/>);
  }

  return (
    <Container component="main" maxWidth={false} disableGutters className="homepage homepage-main-wrapper" >
      <Container component="section" maxWidth={false} disableGutters className="hero-component-wrapper">
        <Box
          className="hero-component-img"
          component="img"
          // sx={{
          //   width: '100%',
          // }}
          alt="A 3D imaginary box with items coming out from it."
          src={heroImage}
        />
        <Container disableGutters className="hero-component-content">
          <h1>ONEBOX</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu enim quis massa volutpat congue. 
            Sed eu tempus nunc, sed fringilla turpis. Pellentesque faucibus at purus ut dapibus.
          </p>
          <Button 
            component={Link} 
            to='/my-club'
            variant="contained"
            color="secondary" 
            sx={{ 
              my: 1,
              mx: 0,
              p: '10px',
              paddingX: '25px',
              fontSize: '16px'
            }}>
            Create My Space
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

export default Homepage;
