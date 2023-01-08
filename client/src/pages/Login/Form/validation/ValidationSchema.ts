import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().required('Password is a required field').min(8, 'Password must be atleast 8 characters').max(30, 'Password cannot exceed 30 characters').matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  )
});