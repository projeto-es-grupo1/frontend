import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Institution from './pages/Institution';
import Perfil from './pages/Perfil';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Feed />} path="/feed" />
          <Route element={<Login />} path="/login" />
          <Route element={<Login />} path="*" />
          <Route element={<Register />} path="/register" />
          <Route element={<Institution />} path="/perfilorg" />
          <Route element={<Perfil />} path="/perfilpessoal" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
