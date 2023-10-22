import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function EditarPerfilForm() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Logica
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: 400, margin: 'auto', paddingRight: '32px' }}
      >
        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Nome" fullWidth variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="competencies"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Competências"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="contact"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Contato"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ marginTop: '6px' }}
            size="large"
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Editar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditarPerfilForm;
