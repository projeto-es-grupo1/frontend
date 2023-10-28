import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  Typography
} from '@mui/material';
import ThumbsUpSvg from '../assets/ThumbsUpSvg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const CardVaga = ({ vaga }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate(`/perfil/vaga/${vaga.lab}/${vaga._id}`);
  };

  return (
    <Card
      sx={{ boxShadow: 4 }}
      style={{
        display: 'grid',
        maxWidth: '600px',
        minWidth: '80%',
        padding: '32px',
        justifyContent: 'center',
        margin: '1rem auto',
        gap: '30px',
        marginBottom: '42px',
      }}
    >
      <Typography variant="h6" style={{ gridColumn: '1/3' }}>
        {vaga.titulo}
      </Typography>
      <Typography
        variant="body2"
        style={{ gridColumn: '1/3', textAlign: 'justify' }}
      >
        {vaga.descricao}
      </Typography>
      <Typography variant="subtitle2" style={{ gridColumn: '3/3' }}>
        {vaga.localizacao}
      </Typography>
      <Box
        style={{
          display: 'flex',
          gridColumn: '1/4',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          Ver Vaga
        </Button>
      </Box>
      <Box
        style={{
          display: 'flex',
          gridColumn: '4/4',
          justifyContent: 'space-between',
        }}
      >
      </Box>
    </Card>
  );
};

export default CardVaga;
