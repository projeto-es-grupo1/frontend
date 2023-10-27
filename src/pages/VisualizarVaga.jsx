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

const NovaVaga = () => {
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
              <Typography variant="h4">Bolsista Pibic</Typography>
              <Typography variant="body1">20 Horas/Semana</Typography>
            </Box>
            <Typography
              sx={{ marginBottom: '10px' }}
              variant="subtitle2"
              fontSize="1rem"
            >
              Laboratorio de sistemas integrados - LSI
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <Typography variant="body1">3 vagas</Typography>
              <div
                style={{
                  height: '6px',
                  width: '6px',
                  background: 'grey',
                  borderRadius: '100px',
                }}
              />
              <Typography variant="body1">R$ 700,00</Typography>
            </Box>
            <Typography sx={{ marginBottom: '16px' }} variant="body1">
              Área
            </Typography>

            <Typography
              sx={{ marginBottom: '32px' }}
              variant="body2"
              color="#6B6A6B"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid.
            </Typography>
            <Typography variant="subtitle2" fontSize="1.05rem">
              Habilidades requeridas:
            </Typography>
            <Typography sx={{ marginBottom: '24px' }}>
              ReactJs | NodeJs | PostgreSql | Docker | Git
            </Typography>
            <Typography variant="subtitle1" fontSize="1.05rem">
              Habilidades diferenciais:
            </Typography>
            <Typography sx={{ marginBottom: '64px' }}>
              Figma | Modelagem de banco de dados | Analise de dados
            </Typography>
            <Box
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Button variant="contained" size="large">
                Enviar curriculo
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default NovaVaga;
