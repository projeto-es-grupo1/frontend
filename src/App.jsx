import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Institution from './pages/Institution';
import Perfil from './pages/Perfil';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './context/authContext';
import AddCertificado from './pages/AddCertificado';
import EditarPerfil from './pages/EditarPerfil';
import NovaVaga from './pages/NovaVaga';
import VisualizarVaga from './pages/VisualizarVaga';
import EditarVaga from './pages/EditarVaga';
import PerfilPublico from './pages/PerfilPublico';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            {user != null ? (
              <Route element={<Feed />} path="/feed" />
            ) : (
              <Route element={<Login />} path="/login" />
            )}

            {user != null ? (
              <Route element={<Institution />} path="/perfilorg" />
            ) : (
              <Route element={<Login />} path="/login" />
            )}

            {user != null && !user.isLab ? (
              <Route element={<Perfil />} path="/perfil" />
            ) : (
              <Route element={<Login />} path="/login" />
            )}

            {user != null && user.isLab ? (
              <Route element={<Institution />} path="/perfil" />
            ) : (
              <Route element={<Login />} path="/login" />
            )}

            {user != null ? (
              <Route
                element={<AddCertificado />}
                path="/perfil/add_certificado"
              />
            ) : (
              <Route element={<Login />} path="/perfil/add_certificado" />
            )}

            {user != null ? (
              <Route element={<Feed />} path="*" />
            ) : (
              <Route element={<Login />} path="/*" />
            )}

            <Route element={<EditarPerfil />} path="/editarperfil" />
            <Route element={<PerfilPublico />} path="/perfil/:link/:id" />
            <Route element={<NovaVaga />} path="/lab/novaVaga" />
            <Route element={<EditarPerfil />} path="/editar/:id" />
            <Route element={<VisualizarVaga />} path="/perfil/vaga/:lab/:vaga" />
            <Route element={<EditarVaga />} path="/perfil/editar_vaga/:lab/:vaga" />

            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
