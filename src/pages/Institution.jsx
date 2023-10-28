import {
  Avatar,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';
import FormModal from '../components/FormModal';
import NovaVagaForm from '../components/NovaVagaForm';
import FormModalLink from '../components/FormModalLink';
import EditarInstituicaoForm from '../components/EditarInstituicaoForm';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CardVaga from '../components/CardVaga';

const Institution = () => {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [vagas, setVagas] = useState();
  const [info, setInfo] = useState();

  const handleClick = () => {
    navigate("/lab/novavaga");
  };

  const getLabVagaData = async () => {
    if (user != null && user.isLab) {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/vagas/${user._id}`,
        );
        setVagas(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const getLabData = async () => {
    if (user != null && user.isLab) {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/perfil/${user._id}`,
        );
        console.log(res.data[0]);
        setInfo(res.data[0]);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  React.useEffect(() => {
    getLabVagaData();
    getLabData();
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
                  { info && info.nome ? info.nome : "Adicione o nome!" }
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: '10px',
                    maxWidth: '46ch',
                    color: '#494949',
                  }}
                >
                  { info && info.motivacao ? info.motivacao : "Adicione a descrição!" }
                </Typography>
                <Box
                  sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <Typography variant="subtitle1" sx={{ maxWidth: '46ch' }}>
                    { info && info.mora ? info.more : "Adicione o localização!" }
                  </Typography>
                  <div
                    style={{
                      height: '8px',
                      width: '8px',
                      background: '#494949',
                      borderRadius: '100px',
                    }}
                  ></div>
                  <Link href="#" underline="hover">
                    { info && info.email ? info.email : "Adicione o email!" }
                  </Link>
                </Box>
              </Box>

              <FormModalLink
                link={'Editar Perfil'}
                formsTitle={'Editar Perfil'}
                forms={<EditarInstituicaoForm />}
              />
            </Card>

            <Card
              sx={{ boxShadow: 4 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
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
                <Typography variant="h6">Vagas Publicadas</Typography>

                <Grid item xs={12}>
                  <Button
                    sx={{ marginTop: '6px' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={handleClick}
                  >
                    Publicar vaga
                  </Button>
                </Grid>
              </Box>
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                {vagas && vagas.length > 0 ? (
                  vagas.map((vaga, index) => (
                    <CardVaga vaga={vaga} key={index} />
                  ))
                ) : (
                  <Typography variant="body2">Nenhuma vaga publicada ainda.</Typography>
                )}
              </Box>
              
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Institution;
