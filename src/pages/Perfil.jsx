import {
  Avatar,
  Button,
  Card,
  Container,
  CssBaseline,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Institution = () => {
  const handleClick = () => {
    navigate("/perfil/add_certificado");
  };

  const [data, setData] = React.useState({});

  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);


  const getUserData = async () => {
    // modifyLoad({ type: "LOADING_START" }); 
    if (user != null) {
      try {
        const res = await axios.get(`http://localhost:8800/api/perfil/${user._id}`);
        setData(res.data[0]);
      } catch (err) {
        toast.error(err.message);
      }
    }
    // modifyLoad({ type: "LOADING_END" }); 
  };

  React.useEffect(() => {
    getUserData();
  }, [user]);

  return (
    <>
      <CssBaseline />
      <Box
        style={{
          backgroundColor: '#E2E5E9',
          height: '100vh',
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Header />
        <Container maxWidth="md">
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <Card
              sx={{ boxShadow: 4 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                padding: '65px 50px',
              }}
            >
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Avatar
                  sx={{
                    width: 126,
                    height: 126,
                    backgroundColor: 'grey',
                    marginBottom: '28px',
                  }}
                />
                <Typography variant="h5" sx={{ marginBottom: '16px' }}>
                  { data.nome }
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                  {data.habilidades && data.habilidades.length > 0
                    ? data.habilidades.join(' | ')
                    : "Adicione algumas habilidades!"}
                </Typography>
                <Link href="#" underline="hover">
                  email: { data.email != "" ? data.email : "Não definido!"}
                </Link>
                <Link href="#" underline="hover">
                  telefone: { data.telefone != "" ? data.telefone : "Não definido!"}
                </Link>
              </Box>

              <Link style={{}} href="#" underline="hover">
                {'Editar Perfil'}
              </Link>
            </Card>

            <Card
              sx={{ boxShadow: 4 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '32px 50px',
                width: '100%',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">Certificações</Typography>
                <Button size="large" variant="contained" onClick={handleClick}>
                  Adicionar
                </Button>
              </Box>

              {/* renderizar cards aqui */}
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Institution;
