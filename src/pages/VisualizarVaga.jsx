import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material';
import Header from '../components/Header';
import { display } from '@mui/system';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const NovaVaga = () => {

  const [data, setData] = React.useState({});
  const { lab, vaga } = useParams();

  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const getVagaData = async () => {
    if (user != null) {
      try {
        console.log(lab+"/"+vaga);
        const res = await axios.get(
          `http://localhost:8800/api/vagas/${lab}/${vaga}`,
        );
        setData(res.data[0]);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const handleClick = async () => {
    navigate(`/perfil/editar_vaga/${lab}/${vaga}`);
  };

  const deletarVaga = async () => {
    if (user != null && user.isLab) {
      try {await axios.delete(
          `http://localhost:8800/api/vagas/${lab}/${vaga}`,
        );
        toast.success("Vaga deletada!");
        navigate("/perfil");
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  React.useEffect(() => {
    getVagaData();
  }, [lab, vaga, user]);

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
          overflowX: 'hidden',
        }}
      >
        <Header />
        <Container maxWidth="md">
          <Card sx={{ boxShadow: 4 }} style={{ padding: '64px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '2px',
              }}
            >
              <Typography variant="h4">{ data && data.titulo ? data.titulo : "Carregando"}</Typography>
              <Typography variant="body1">{  data && data.carga_horaria ? data.carga_horaria : "Carregando" } Horas/Semana</Typography>
            </Box>
            <Typography
              sx={{ marginBottom: '10px' }}
              variant="subtitle2"
              fontSize="1rem"
            >
              { data && data.localizacao ? data.localizacao : "Localização não definida!" }
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <Typography variant="body1">{ data && data.qtd_vagas ? data.qtd_vagas : "x" } vagas</Typography>
              <div
                style={{
                  height: '6px',
                  width: '6px',
                  background: 'grey',
                  borderRadius: '100px',
                }}
              />
              <Typography variant="body1">R$ { data && data.bolsa ? data.bolsa : "x"}</Typography>
            </Box>
            <Typography sx={{ marginBottom: '16px' }} variant="body1">
              Área: { data && data.area ? data.area : "Área não definida!" }
            </Typography>

            <Typography
              sx={{ marginBottom: '32px' }}
              variant="body2"
              color="#6B6A6B"
            >
              { data && data.descricao ? data.descricao : "Carregando" }
            </Typography>
            <Typography variant="subtitle2" fontSize="1.05rem">
              Habilidades requeridas:
            </Typography>
            <Typography sx={{ marginBottom: '24px' }}>
              { data && data.habilidades_requeridas && data.habilidades_requeridas.length > 0 ? data.habilidades_requeridas.join(" | ") : "As habilidades requeridas não foram definidas!" }
            </Typography>
            <Typography variant="subtitle1" fontSize="1.05rem">
              Habilidades diferenciais:
            </Typography>
            <Typography sx={{ marginBottom: '64px' }}>
              { data && data.habilidades_sugeridas && data.habilidades_sugeridas.length > 0 ? data.habilidades_sugeridas.join(" | ") : "As habilidades sugeridas não foram definidas!"}
            </Typography>
            <Box
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              { user && user.isLab ? 
                <Button variant="contained" size="large" onClick={deletarVaga}>
                  Deletar vaga
                </Button>
              : 
                <Button variant="contained" size="large">
                  Demonstrar interesse
                </Button>
              }
              { user && user.isLab ? 
                <Button style={{marginLeft: "1rem"}} variant="contained" size="large" onClick={handleClick}>
                  Atualizar vaga
                </Button>
              : 
                <></>
              }
              
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default NovaVaga;
