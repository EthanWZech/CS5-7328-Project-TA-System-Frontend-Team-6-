import React, { useState, useEffect, useContext } from 'react';

import { Typography, Container } from '@mui/material';
import TAIndividualJobDisplay from './TAIndividualJobDisplay';
import useAutoLogout from '../components/AutoLogOut';
interface User {
  username: string;
  // other user properties...
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { Modal, closeModal } = useAutoLogout({
    timeoutDuration: 400, // Use the defined timeout duration
    logoutFunction: () => {
      console.log('called');
      localStorage.clear(); 
      setUser(null); 
      console.log('go to login');
      //navigate('/login'); 
      
    },
  });
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    setUser(currentUser);
  }, []);

  return (
    <Container maxWidth='sm'>
      <TAIndividualJobDisplay></TAIndividualJobDisplay>
      {Modal}
    </Container>
    
  );
};

export default Home;
