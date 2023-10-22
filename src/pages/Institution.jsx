import {
  Avatar,
  Button,
  Card,
  Container,
  CssBaseline,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';
import FormModal from '../components/FormModal';
import NovaVagaForm from '../components/NovaVagaForm';
import FormModalLink from '../components/FormModalLink';
import EditarInstituicaoForm from '../components/EditarInstituicaoForm';

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
                  Nome Completo da Instituição
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: '10px',
                    maxWidth: '46ch',
                    color: '#494949',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Typography>
                <Box
                  sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <Typography variant="subtitle1" sx={{ maxWidth: '46ch' }}>
                    Localização da instituição
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
                    {'Informação de contato'}
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
                <Typography variant="h6">Vagas Publicadas</Typography>

                <FormModal
                  botao={'Publicar Vaga'}
                  formsTitle={'Nova Vaga'}
                  forms={<NovaVagaForm />}
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
