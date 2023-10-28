import { Box, Button, Card, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import ThumbsUpSvg from '../assets/ThumbsUpSvg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

// eslint-disable-next-line react/prop-types
const CardVaga = ({ vaga }) => {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(25);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate(`/perfil/vaga/${user._id}/${vaga._id}`);
  };

  return (
    <Card
      sx={{ boxShadow: 4 }}
      style={{
        display: 'grid',
        maxWidth: '600px',
        padding: '32px',
        gap: '30px',
        marginBottom: '42px',
      }}
    >
      <Typography variant="h6" style={{ gridColumn: '1/3' }}>
        { vaga.titulo }
      </Typography>
      <Typography
        variant="body2"
        style={{ gridColumn: '1/3', textAlign: 'justify' }}
      >
        { vaga.descricao }
      </Typography>
      <Typography variant="subtitle2" style={{ gridColumn: '3/3' }}>
        { vaga.localizacao }
      </Typography>
      <Box
        style={{
          display: 'flex',
          gridColumn: '1/4',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained" onClick={handleClick}>Ver Vaga</Button>
      </Box>
    </Card>
  );
};

export default CardVaga;
