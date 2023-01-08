import { Avatar, Box, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { UploadFileOutlined } from '@mui/icons-material';
import heroImage from '../../assets/images/landing-pages/colorful-box.png';
import HeroBanner from '../../components/global/HeroBanner/HeroBanner';
import './SpacePage.scss';

function SpacePage() {
  
  const { spaceSlug } = useParams();
  console.log(spaceSlug);

  const heroBanner = {
    description: 'Add things to your box, and make this your own space!',
    image: heroImage,
    imageText: spaceSlug + ' is available!',
    // linkText: '#',
    title: spaceSlug + ' is available!',
  };

  return (
    <Container component="main" className="space">
      <HeroBanner data={heroBanner}/>
      <Container>
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <UploadFileOutlined />
        </Avatar>
        <Typography variant="h6">
          Get in touch by filling out the form
        </Typography>
        <Container maxWidth="md">
          <Typography align='center' gutterBottom>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong.
            </p>
          </Typography>
        </Container>
      </Box>

    </Container>
    </Container>
  );
}

export default SpacePage;
