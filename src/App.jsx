import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CardVaga from './components/CardVaga';
import Feed from './pages/Feed';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Feed />} path="/feed" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<Login />} path="*" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
