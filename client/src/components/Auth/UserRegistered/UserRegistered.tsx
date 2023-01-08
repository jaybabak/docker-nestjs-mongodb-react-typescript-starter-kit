import { Container, Typography, Box, Avatar } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function UserRegistered() {
  return (
    <Container className="register" component="main" maxWidth="xs">
    <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <ExitToApp />
        </Avatar>
        <Typography component="h1" variant="h5">
          Thank you for signing up, you may proceed to the <Link to="/login">sign in page.</Link>
        </Typography>
      </Box>
  </Container>)
}