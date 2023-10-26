import React from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Header from '../components/Header';

const NovaVaga = () => {
  const { handleSubmit, control, reset, watch, setValue } = useForm();
  const requeridas = watch('requeridas') || [];
  const diferenciais = watch('diferenciais') || [];

  const handleRequerida = (e) => {
    e.preventDefault();
    const requerida = watch('novaRequerida');
    if (requerida) {
      setValue('novaRequerida', '');
      setValue('requeridas', [...requeridas, requerida]);
    }
  };

  const handleDiferencial = (e) => {
    e.preventDefault();
    const diferencial = watch('novoDiferencial');
    if (diferencial) {
      setValue('novoDiferencial', '');
      setValue('diferenciais', [...diferenciais, diferencial]);
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
          overflowX: 'hidden',
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
                    name="lab_titulo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Título da Vaga"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="localizacao"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Localização"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="data_expiracao"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Data de Expiração"
                        type="date"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="qtd_vagas"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Quantidade de Vagas"
                        type="number"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="area"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Área"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="valor"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Valor"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">R$</InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="carga_horaria"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Carga Horária semana"
                        type="number"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              Horas
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="novaRequerida"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nova Habilidade Requerida"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                  <Button
                    color="primary"
                    size="large"
                    onClick={handleRequerida}
                  >
                    Adicionar Habilidade Requerida
                  </Button>
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}
                  >
                    {requeridas.map((requerida, index) => (
                      <div key={index}>
                        <Chip
                          label={requerida}
                          onDelete={() => {
                            const updatedRequeridas = [...requeridas];
                            updatedRequeridas.splice(index, 1);
                            setValue('requeridas', updatedRequeridas);
                          }}
                        />
                      </div>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="novoDiferencial"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nova Habilidade Diferencial"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                  <Button
                    color="primary"
                    size="large"
                    onClick={handleDiferencial}
                  >
                    Adicionar Habilidade Diferencial
                  </Button>
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}
                  >
                    {diferenciais.map((diferencial, index) => (
                      <div key={index}>
                        <Chip
                          label={diferencial}
                          onDelete={() => {
                            const updatedDiferenciais = [...diferenciais];
                            updatedDiferenciais.splice(index, 1);
                            setValue('diferenciais', updatedDiferenciais);
                          }}
                        />
                      </div>
                    ))}
                  </Box>
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

export default NovaVaga;
