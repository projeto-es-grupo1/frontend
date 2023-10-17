import { Button, Card, Typography } from '@mui/material';
import React from 'react';

const CardVaga = ({titulo, descricao, localizacao, curtidas}) => {

  return (
    <Card style={{display: 'grid', maxWidth: '600px', padding: '32px', gap: '30px'}}>
      <Typography style={{gridColumn: '1/3'}}>
        {titulo} FrontEnd Developer with React and Vite
      </Typography>
      <Typography  style={{gridColumn: '1/3', textAlign: 'justify'}}>
        {descricao} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </Typography>
      <Typography  style={{gridColumn: '3/3'}}>
        {localizacao} Lorem ipsum dolor sit amet, consectetur adipiscing elie.
      </Typography>
      <Button variant='contained'>Enviar Curriculo</Button>
    </Card>
  );
};

export default CardVaga;