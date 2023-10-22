import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Institution from './pages/Institution';
import Perfil from './pages/Perfil';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from "./context/authContext"
import AddCertificado from './pages/AddCertificado';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            { user != null ? <Route element={<Feed />} path="/feed" /> : <Route element={<Login />} path="/login" /> }
            { user != null ? <Route element={<Institution />} path="/perfilorg" /> : <Route element={<Login />} path="/login" /> }
            { user != null && !user.isLab ? <Route element={<Perfil />} path="/perfil" /> : <Route element={<Login />} path="/login" /> }
            { user != null ? <Route element={<AddCertificado />} path="/perfil/add_certificado" /> : <Route element={<Login />} path="/perfil/add_certificado" /> }
            { user != null ? <Route element={<Feed />} path="*" /> : <Route element={<Login />} path="/*" /> }

            <Route element={<Register />} path="/register" />  
            <Route element={<Login />} path="/login" />
          
          </Routes>
        </AuthContextProvider>
        
      </BrowserRouter>
    </>
  );
}

export default App;
