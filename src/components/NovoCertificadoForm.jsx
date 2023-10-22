import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const NovaVagaForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // logica
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: 400, margin: 'auto', paddingRight: '32px' }}
      >
        <Grid item xs={6}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Título"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="duracao"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Duração"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Descrição"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="link"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Link do certificado"
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
            Publicar Certificado
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NovaVagaForm;
