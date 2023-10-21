import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import AccountMenu from './components/Profile';

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
