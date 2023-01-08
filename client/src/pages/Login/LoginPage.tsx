import { useEffect, useState } from 'react';
import { Container, Avatar, Box, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { ProgressBar } from '../../components/global';
import { ValidationSchema } from './Form/validation/ValidationSchema';
import { LoginFormInterface } from '../../interfaces/LoginFormInterface';
import { AuthClient } from '../../services';
import { useAuth } from '../../lib/hooks/useAuth/useAuth';
import LoginForm from './Form/LoginForm';
import './LoginPage.scss';


function LoginPage() {
  const [loading, setLoading] = useState(false);
  const {authenticated, setUserAuthenticated } = useAuth();
  const navigate = useNavigate();

  const fetchData = async (values: LoginFormInterface) => {
    try {
      let response = await AuthClient.getInstance().authenticateUser(values);

      if (response?.access_token) {
        setUserAuthenticated(response?.access_token);
      }
    } catch (error:any) {
      if (error.response.status === 401) {
        formik.setFieldError('email', 'Sorry this email account may not be associated with an account.');
        formik.setFieldError('password', 'Sorry this password may not be valid.');
        return true;
      }
      console.error(error);
      alert('Sorry an unexpected error occured.');
    }
    return true;
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    validateOnChange: false,
    onSubmit: (values: LoginFormInterface) => {
      setLoading(true);
      fetchData(values);
      setLoading(false);
    },
  });

  useEffect(() => {
    if (authenticated) navigate('/profile');
  }, [authenticated, navigate])

  if (loading) {
    return (<ProgressBar/>);
  }
  
  return (
    <Container component="main" maxWidth="sm">
    <Box
      sx={{
        mt: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">Sign in</Typography>
      <LoginForm formik={formik}/>
    </Box>
  </Container>
  );
}

export default LoginPage;
