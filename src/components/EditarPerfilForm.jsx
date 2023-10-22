import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function EditarPerfilForm({ id }) {
  const { handleSubmit, control, reset } = useForm();

  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const info = {
      "user": user._id,
      "nome" : data.name,
      "email" : data.contact,
      "habilidades" : data.competencies.split(",")
    }

    if (user != null) {
        try {
          navigate("/")
          await axios.put(`http://localhost:8800/api/perfil/${id}`, info);
          toast.success("Perfil atualizado!")
        } catch (err) {
          //toast.error("Algum erro ocorreu!");
          toast.error(err.message)
        }
    } else {
        navigate("/login");
    }
  }

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
              <TextField {...field} label="Nome" fullWidth variant="outlined" required/>
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
                required
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
                required
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
