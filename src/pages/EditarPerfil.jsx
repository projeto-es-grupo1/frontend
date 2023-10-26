import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  CssBaseline,
  Box,
  Container,
  Card,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Chip,
} from '@mui/material';
import Header from '../components/Header';

const EditarPerfil = () => {
  const { handleSubmit, control, reset, watch, setValue } = useForm();
  const habilidades = watch('habilidades') || [];
  const interesses = watch('interesses') || [];

  const handleAddHabilidade = (e) => {
    e.preventDefault();
    const habilidade = watch('novaHabilidade');
    if (habilidade) {
      setValue('novaHabilidade', '');
      setValue('habilidades', [...habilidades, habilidade]);
    }
  };

  const handleAddInteresse = (e) => {
    e.preventDefault();
    const interesse = watch('novoInteresse');
    if (interesse) {
      setValue('novoInteresse', '');
      setValue('interesses', [...interesses, interesse]);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    // Lógica de envio do formulário
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
          <Card sx={{ boxShadow: 4 }} style={{ padding: '64px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={2}
                sx={{ maxWidth: 400, margin: 'auto', paddingRight: '32px' }}
              >
                <Grid item xs={6}>
                  <Controller
                    name="nome"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nome"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="telefone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Telefone"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="maiorDeIdade"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} color="primary" />}
                        label="Maior de Idade"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="novaHabilidade"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nova Habilidade"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                  <Button
                    color="primary"
                    size="large"
                    onClick={handleAddHabilidade}
                  >
                    Adicionar Habilidade
                  </Button>
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}
                  >
                    {habilidades.map((habilidade, index) => (
                      <div key={index}>
                        <Chip
                          label={habilidade}
                          onDelete={() => {
                            const updatedHabilidades = [...habilidades];
                            updatedHabilidades.splice(index, 1);
                            setValue('habilidades', updatedHabilidades);
                          }}
                        />
                      </div>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="novoInteresse"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Novo Interesse"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                  <Button
                    color="primary"
                    size="large"
                    onClick={handleAddInteresse}
                  >
                    Adicionar Interesse
                  </Button>
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}
                  >
                    {interesses.map((interesse, index) => (
                      <div key={index}>
                        <Chip
                          label={interesse}
                          onDelete={() => {
                            const updatedInteresses = [...interesses];
                            updatedInteresses.splice(index, 1);
                            setValue('interesses', updatedInteresses);
                          }}
                        />
                      </div>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="disponibilidadeRemoto"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} color="primary" />}
                        label="Disponibilidade Remoto"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="disponibilidadePresencial"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} color="primary" />}
                        label="Disponibilidade Presencial"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="motivacao"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Motivação"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="focandoEm"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Focando em"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ marginTop: '6px' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default EditarPerfil;
