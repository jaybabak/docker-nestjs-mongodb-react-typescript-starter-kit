import { useState } from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useFormik } from 'formik';
import { ValidationSchema } from './Form/validation/ValidationSchema';
import { RegisterFormInterface } from '../../interfaces/RegisterFormInterface';
import { ProgressBar } from '../../components/global';
import { RegisterForm } from './Form/RegisterForm';
import { AuthClient } from '../../services';
import UserRegistered from '../../components/Auth/UserRegistered/UserRegistered';
import heroImage from '../../assets/images/landing-pages/clean-imaginary-box.png';
import HeroBanner from '../../components/global/HeroBanner/HeroBanner';

function RegisterPage() {

  const [loading, setLoading] = useState(false);
  const [isRegistered, setRegisterationStatus] = useState(false);

  const fetchData = async (values: RegisterFormInterface) => {
    try {
      let response = await AuthClient.getInstance().registerUser(values);
      console.log(response);

      if (response.hasOwnProperty('_id')) {
        setRegisterationStatus(true);
      }

    } catch (error:any) {
      if (error.code === 'ERR_BAD_REQUEST') {
        if (error.response.status === 400) {
          if (error.response?.data?.error?.email?.notUnique) {
            return formik.setFieldError('email', 'Sorry, this email is already in use');
          }

          if (!(error.response?.data?.error === undefined)) {
            const errors = error.response.data.error;
            formik.setFieldError('firstName', 'Please review the first name');
            formik.setFieldError('lastName', 'Please review the last name');
            formik.setFieldError('email', 'Please review the email');
            formik.setFieldError('password', 'Please review the email');
            console.error(errors)
          }
          return true;
        }
      }
      console.error(error);
      alert('Sorry an unexpected error occured.');
      return true;
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    validateOnChange: false,
    onSubmit: async (values: RegisterFormInterface) => {
      setLoading(true);
      await fetchData(values);
      setLoading(false);
    },
  });

  const heroBanner = {
    description: 'Create an account to get started with OneBox and its superior file storage/sharing experience.',
    image: heroImage,
    imageText: 'Image of a globe',
    // linkText: '#',
    title: 'Create Your Account',
  };

  if (loading) {
    return (<ProgressBar/>);
  }

  if (isRegistered) {
    return <UserRegistered/>
  }

  return (
    <Container className="register" component="main" >
      <HeroBanner data={heroBanner}/>
      <Container className="register-form" component="section" maxWidth="sm">
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">Sign up</Typography>
            <RegisterForm formik={formik}/>
          </Box>
      </Container>
    </Container>
  );
}

export default RegisterPage;
