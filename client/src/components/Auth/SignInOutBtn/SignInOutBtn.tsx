import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../lib/hooks/useAuth/useAuth';

export function SignInOutBtn() {
  const {authenticated, setUserUnauthenticated} = useAuth();
  const navigate = useNavigate();

  const logOutUser = () => {
    setUserUnauthenticated();
    navigate('/login');
  }

  if (authenticated) {
    return (<Button onClick={logOutUser} variant="contained" color="primary" sx={{ my: 1, mx: 1.5 }}>Sign Out</Button>)
  }
  else {
    return (<Button component={Link} to='/login' variant="contained" color="primary" sx={{ my: 1, mx: 1.5 }}>Sign in</Button>);
  }
}