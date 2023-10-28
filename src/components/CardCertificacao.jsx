import { Button, Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/authContext';
import React from 'react';

const CardCertificacao = ({ certificado }) => {
  const { user } = React.useContext(AuthContext);

  const deletar = async () => {
    if (user == null) {
      console.log("Erro: Você não tem permissão para adicionar certificados.");
      return;
    }
  
    try {
      await axios.delete(`http://localhost:8800/api/certificados/${certificado._id}`);
      toast.success("Cetificado removido com sucesso!");
      window.location.reload();
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Card
      sx={{ boxShadow: 4, maxWidth: '80%', padding: '32px', margin: 'auto', marginBottom: "1rem" , minWidth: '80%' }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <Typography variant="h5">{ certificado && certificado.titulo ? certificado.titulo : "Carregando"}</Typography>
        <Typography variant="body1">{ certificado && certificado.duracao ? certificado.duracao : "Carregando" } horas</Typography>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: '32px' }}>
          Área: { certificado && certificado.area ? certificado.area : "Carregando" }
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href={certificado.link_certificado}>
            <Button variant="contained" size="large" sx={{ maxWidth: '200px' }}>
              Ver Certificado
            </Button>
          </a>
          
          <Button size="large" onClick={deletar}>Excluir</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CardCertificacao;
