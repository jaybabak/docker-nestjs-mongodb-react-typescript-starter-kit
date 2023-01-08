import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { ProgressBar } from '../../components/global';
import { UserInterface } from '../../interfaces/UserInterface';
import { AuthClient } from '../../services';
import './ProfilePage.scss';

function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setData] = useState<UserInterface | any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response:Promise<UserInterface> | any = await AuthClient.getInstance().getUser();
        setData(response);
      } catch (error:any) {
        console.log(error.response.data);
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
    <Container component="main" className="profile">
      <h1>Hello {user?.firstName ? user.firstName : 'Please sign in'}</h1>
    </Container>
  );
}

export default ProfilePage;
