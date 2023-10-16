import React, { useState } from 'react';
import Button from '../components/Button';

const Register = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={styles.background}>
      <div style={styles.loginContainer}>
        <div style={styles.titleContainer}>
          <h2 style={styles.title}>Registrar</h2>
        </div>
        
        <div style={styles.inputContainer}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                style={styles.input}
                placeholder='Email'
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={handleSenhaChange}
                style={styles.input}
                placeholder='Senha'
              />
            </div>
          </form>
        </div>
        <div style={styles.footer}>
          <Button texto="Cadastrar" onClick={handleSubmit}></Button>
          <a style={styles.link}href="#">Não tem conta? se cadastre</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: '#e0e0e0',
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
    height: 562
  },
  title: {
    color: '#3F3F3F'
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
    marginTop: -150
  },
  link: {
    marginTop: 20, 
    color: '#5972F5',
    fontWeight: 400,
    fontSize: 14
  }
};

export default Register;