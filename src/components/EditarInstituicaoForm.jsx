import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditarInstituicaoForm({ perfil }) {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    if (user == null) {
      console.log("Erro: Você não tem permissão para criar vagas.");
      return;
    }
  
    try {
      const info = {
        user: user._id,
        nome: data.name,
        email: data.contact,
        motivacao: data.descricao,
        mora: data.local,
        telefone: data.telefone,
        maior_de_idade: data.maiorDeIdade,
        habilidades: data.habilidades,
        interesses: data.interesses,
        disponibilidade_remoto: data.disponibilidadeRemoto,
        disponibilidade_presencial: data.disponibilidadePresencial,
        focando_em: data.focos
      };

      console.log(info);

      await axios.put(`http://localhost:8800/api/perfil/${perfil._id}`, info);
      toast.success("Perfil Atualizado com sucesso!");
      navigate("/perfil");
    } catch (err) {
      toast.error(err.message);
    }
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
            defaultValue={perfil.nome}
            render={({ field }) => (
              <TextField {...field} label="Nome" fullWidth variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="descricao"
            control={control}
            defaultValue={perfil.motivacao}
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
        <Grid item xs={6}>
          <Controller
            name="local"
            control={control}
            defaultValue={perfil.mora}
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
            name="contact"
            control={control}
            defaultValue={perfil.email}
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

export default EditarInstituicaoForm;
