import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required').min(2,'First name must be a minimum of 2 characters').max(30, 'First name cannot exceed 30 characters').matches(/^[A-Z]+$/i, 'First name can only contain alphabetical characters'),
  lastName: yup.string().required('Last name is required').min(2,'First name must be a minimum of 2 characters').max(30, 'Last name cannot exceed 30 characters').matches(/^[A-Z]+$/i, 'Last name can only contain alphabetical characters'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().required('Password is a required field').min(8, 'Password must be atleast 8 characters').max(30, 'Password cannot exceed 30 characters').matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least one uppercase, one number and one special case character"
  )
});