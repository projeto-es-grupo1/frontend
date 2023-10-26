import { Button, Card, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CardCertificacao = () => {
  return (
    <Card
      sx={{ boxShadow: 4, maxWidth: '80%', padding: '32px', margin: 'auto' }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <Typography variant="h5">Titulo</Typography>
        <Typography variant="body1">Data/Duração</Typography>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: '32px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" size="large" sx={{ maxWidth: '200px' }}>
            Ver Certificado
          </Button>
          <Button size="large">Excluir</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CardCertificacao;
