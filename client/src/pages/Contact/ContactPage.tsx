import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import HeroBanner from '../../components/global/HeroBanner/HeroBanner';
import heroImage from '../../assets/images/landing-pages/clean-imaginary-box.png';
import { ChatBubbleOutlineOutlined } from '@mui/icons-material';

function ContactPage() {

  const heroBanner = {
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    image: heroImage,
    imageText: 'Contact us image',
    // linkText: '#',
    title: 'Contact',
  };

  return (
    <Container component="main" className="contact">
      <HeroBanner data={heroBanner}/>
      <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <ChatBubbleOutlineOutlined />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          Get in touch by filling out the form
        </Typography>
      </Box>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="subject"
            name="subject"
            label="Subject"
            fullWidth
            autoComplete="subject"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            name="message"
            label="Message"
            fullWidth
            autoComplete="message"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
    </Container>
  );
}

export default ContactPage;
