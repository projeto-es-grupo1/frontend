import React, { useState } from 'react';
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
import { AuthContext } from '../context/authContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditarPerfil = () => {
  const { handleSubmit, control, reset, watch, setValue } = useForm();
  const habilidades = watch('habilidades') || [];
  const interesses = watch('interesses') || [];
  const focos = watch('focos') || [];
  const { user } = React.useContext(AuthContext);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

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

  const handleAddFoco = (e) => {
    e.preventDefault();
    const foco = watch('novoFoco');
    if (foco) {
      setValue('novoFoco', '');
      setValue('focos', [...focos, foco]); // Atualize o estado 'focos'
    }
  };


  const getUserData = async () => {
    if (user != null) {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/perfil/${user._id}`,
        );

        setData(res.data[0]);
        setValue('nome', res.data[0].nome);
        setValue('telefone', res.data[0].telefone);
        setValue('maiorDeIdade', res.data[0].maior_de_idade);
        setValue('habilidades', res.data[0].habilidades);
        setValue('interesses', res.data[0].interesses);
        setValue('disponibilidadeRemoto', res.data[0].disponibilidade_remoto);
        setValue('motivacao', res.data[0].motivacao);
        setValue('focos', res.data[0].focando_em);
        setValue('email', res.data[0].email);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  React.useEffect(() => {
    getUserData();
  }, [user]);

  const onSubmit = async (data) => {
    if (user == null) {
      console.log("Erro: Você não tem permissão para criar vagas.");
      return;
    }
  
    try {
      const info = {
        user: user._id,
        nome: data.nome,
        telefone: data.telefone,
        email: data.email,
        maior_de_idade: data.maiorDeIdade,
        habilidades: data.habilidades,
        interesses: data.interesses,
        disponibilidade_remoto: data.disponibilidadeRemoto,
        disponibilidade_presencial: data.disponibilidadePresencial,
        motivacao: data.motivacao,
        focando_em: data.focos
      };

      console.log(info);

      await axios.put(`http://localhost:8800/api/perfil/${id}`, info);
      toast.success("Perfil Atualizado com sucesso!");
      navigate("/perfil");
    } catch (err) {
      toast.error(err.message);
    }
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
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                <Controller
                  name="novoFoco"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Novo Foco"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <Button
                  color="primary"
                  size="large"
                  onClick={handleAddFoco}
                >
                  Adicionar Foco
                </Button>
                <Box
                  sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '100%' }}
                >
                  {focos.map((foco, index) => (
                    <div key={index}>
                      <Chip
                        label={foco}
                        onDelete={() => {
                          const updatedFocos = [...focos];
                          updatedFocos.splice(index, 1);
                          setValue('focos', updatedFocos);
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

export default EditarPerfil;
