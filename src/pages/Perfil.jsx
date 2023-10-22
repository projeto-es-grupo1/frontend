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
import FormModal from '../components/FormModal';
import NovoCertificadoForm from '../components/NovoCertificadoForm';

const Institution = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };

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
                  Nome Completo
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>
                  Competencias | Separadas | Por | Barra
                </Typography>
                <Link href="#" underline="hover">
                  {'Informação de contato'}
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

                <FormModal
                  botao={'Adicionar'}
                  formsTitle={'Adicionar Certificado'}
                  forms={<NovoCertificadoForm />}
                />
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
