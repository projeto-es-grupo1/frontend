import {
    Avatar,
    Card,
    Container,
    CssBaseline,
    Link,
    Typography,
  } from '@mui/material';
  import { Box } from '@mui/system';
  import Header from '../components/Header';
  import { AuthContext } from '../context/authContext';
  import React from 'react';
  import axios from 'axios';
  import { toast } from 'react-toastify';
  import FormModal from '../components/FormModal';
  import NovoCertificadoForm from '../components/NovoCertificadoForm';
  import FormModalLink from '../components/FormModalLink';
  import EditarPerfilForm from '../components/EditarPerfilForm';
  import CardCertificacao from '../components/CardCertificacao';
  import CardVaga from '../components/CardVaga';
import { useParams } from 'react-router-dom';
import CardCertificacaoPublica from '../components/CardCertificacaoPublica';

  const PerfilPublico = () => {
    const [data, setData] = React.useState({});
    const [certificados, setCertificados] = React.useState({});
    const { link, id } = useParams();
    
    const { user } = React.useContext(AuthContext);
  
    const getUserData = async () => {
      // modifyLoad({ type: "LOADING_START" });
      if (user != null) {
        try {
          const res = await axios.get(
            `http://localhost:8800/api/perfil/${id}`,
          );
          setData(res.data[0]);
        } catch (err) {
          toast.error(err.message);
        }
      }
      // modifyLoad({ type: "LOADING_END" });
    };
  
    const getUserCertificados = async () => {
      if (user != null) {
        try {
          const res = await axios.get(
            `http://localhost:8800/api/certificados/${link}`,
          );
          console.log(res.data);
          setCertificados(res.data);
        } catch (err) {
          toast.error(err.message);
        }
      }
    };
  
    React.useEffect(() => {
      getUserData();
      getUserCertificados();
    }, [user]);
  
    return (
      <>
        <CssBaseline />
        <Box
          style={{
            backgroundColor: '#E2E5E9',
            height: '100%',
            maxWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowX: 'hidden',
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
                    {data && data.nome ? data.nome : "Carregando"}
                  </Typography>
                  <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                    Motivação:
                  </Typography>
                  <Typography variant="p" sx={{ marginBottom: '2px', textAlign: 'center' }}>
                    {data && data.motivacao ? data.motivacao : "Motivação não informada!"}
                  </Typography>
                  <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                    Disponibilidade:
                  </Typography>
                  <Typography variant="p" sx={{ marginBottom: '2px', textAlign: 'center' }}>
                    {data && data.disponibilidade_presencial && data.disponibilidade_remoto ? "Remoto e Presencial" : ""}
                    {data && data.disponibilidade_presencial && !data.disponibilidade_remoto ? "Presencial" : ""}
                    {data && !data.disponibilidade_presencial && data.disponibilidade_remoto ? "Presencial" : ""}
                    {data && !data.disponibilidade_presencial && !data.disponibilidade_remoto ? "Não informado" : ""}
                  </Typography>
                  <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                    Habilidades:
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                    {data.habilidades && data.habilidades.length > 0
                      ? data.habilidades.join(' | ')
                      : 'Nenhuma adicionada ainda!'}
                  </Typography>
                  <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                    Interesses:
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                    {data.interesses && data.interesses.length > 0
                      ? data.interesses.join(' | ')
                      : 'Nenhum adicionado ainda!'}
                  </Typography>
                  <Typography variant="h6" sx={{ marginBottom: '5px' }}>
                    Focando em:
                  </Typography>
                  <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                    {data.focando_em && data.focando_em.length > 0
                      ? data.focando_em.join(' | ')
                      : 'Nada adicionado ainda!'}
                  </Typography>
                  <Link href="#" underline="hover">
                    email: {data.email != '' ? data.email : 'Não definido!'}
                  </Link>
                  <Link href="#" underline="hover">
                    telefone:{' '}
                    {data.telefone != '' ? data.telefone : 'Não definido!'}
                  </Link>
                </Box>
                
              </Card>
  
              <Card
                sx={{ boxShadow: 4 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '32px 50px',
                  width: '100%',
                  gap: '64px',
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
  
                </Box>
  
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                {certificados && certificados.length > 0 ? (
                  certificados.map((certificado, index) => (
                    <CardCertificacaoPublica certificado={certificado} key={index} />
                  ))
                ) : (
                  <Typography variant="body2">Nenhum Certificado publicado ainda.</Typography>
                )}
              </Box>
              </Card>
            </Box>
          </Container>
        </Box>
      </>
    );
  };
  
  export default PerfilPublico;
  