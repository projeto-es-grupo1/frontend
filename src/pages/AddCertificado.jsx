import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import { CssBaseline } from '@mui/material';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCertificado = () => {
  const [link, setLink] = useState('');
  const [titulo, setTitulo] = useState('');
  const [area, setArea] = useState('');

  const { user , token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const info = {
              "user": user._id,
              "link_certificado": `${link}`,
              "titulo": `${titulo}`,
              "area": `${area}`
          }

          const headers = {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzUwMjI5NjdmNWZmZGQwYzBhNzI2YiIsImlzTGFiIjp0cnVlLCJpYXQiOjE2OTc5NzM2ODR9.TznODMfyWLU1RVzHQemwiBbk-Ff3hsWHyhJD1uAws9w`,
          };
          console.log(headers);
          await axios.post(`http://localhost:8800/api/certificados/${user._id}`, info, { headers });
          
          navigate("/perfil")
          toast.success("Certificado adicionado!")
      } catch (err) {
          toast.error(err.message);
      }
  }

  return (
    <>
      <CssBaseline />
      <div style={styles.background}>
        <div style={styles.loginContainer}>
          <div style={styles.titleContainer}>
            <h2 style={styles.title}>Adicionar Certificado</h2>
          </div>

          <div style={styles.inputContainer}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="email"
                  value={link}
                  onChange={handleLinkChange}
                  style={styles.input}
                  placeholder="Link do certificado"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="senha"
                  value={titulo}
                  onChange={handleTituloChange}
                  style={styles.input}
                  placeholder="Titulo"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="area"
                  value={area}
                  onChange={handleAreaChange}
                  style={styles.input}
                  placeholder="Área"
                />
              </div>
            </form>
          </div>
          <div style={styles.footer}>
            <Button texto="Adicionar" onClick={handleSubmit}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  background: {
    backgroundColor: '#E2E5E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: 419,
    height: 562,
  },
  title: {
    color: '#3F3F3F',
  },
  inputContainer: {
    marginTop: -100,
  },
  input: {
    width: 284,
    height: 40,
    padding: '10px',
    border: 'none',
    fontSize: '16px',
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
  },
  titleContainer: {
    width: 349,
    borderBottom: '2px solid #DDDDDD',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 100,
    marginTop: -150,
  },
  link: {
    marginTop: 20,
    color: '#5972F5',
    fontWeight: 400,
    fontSize: 14,
  },
};

export default AddCertificado;
