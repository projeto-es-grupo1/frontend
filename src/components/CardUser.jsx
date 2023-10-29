import { Button, Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/authContext';
import React, { useEffect, useState } from 'react';

const CardUser = ({ perfil }) => {
  const { user } = React.useContext(AuthContext);
  const [info, setInfo] = useState({});

  const getInfo = async () => {
    if (user != null) {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/perfil/${perfil}`
        );
        console.log(res.data[0]);
        setInfo(res.data[0]);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    getInfo();
  }, [user]);

  return (
    <Card
      sx={{ boxShadow: 4, maxWidth: '80%', padding: '32px', margin: 'auto', marginBottom: "1rem" , minWidth: '80%' , marginTop: '1rem'}}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <Typography variant="h5">{ info && info.nome ? info.nome : "Carregando"}</Typography>
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <Typography variant="body1">{ info && info.habilidades ? info.habilidades.join(" | ") : "Carregando"}</Typography>
      </Box>
      
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href={"/perfil/"+info.user+"/"+perfil}>
            <Button variant="contained" size="large" sx={{ maxWidth: '200px' }}>
              Ver Perfil
            </Button>
          </a>
        </Box>
      </Box>
    </Card>
  );
};

export default CardUser;
