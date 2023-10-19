import React from 'react';
import Button from '../components/Button';

const Institution = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <div style={styles.leftContainer}>
        <div style={styles.circle}></div>

        <p style={styles.name}>Nome completo da instituição</p>

        <div style={styles.containerDescription}>
          <p style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, arcu eget viver.</p>
        </div>

        <div style={styles.containerLocalization}>
          <p style={styles.textLocalization}>Localização da instituição</p>
          <div style={styles.point}></div>
            <a style={styles.link}href="#">Informações de contato</a>
          </div>
        </div>
        
        <div style={styles.rightContainer}>
          <a style={styles.link2} href="#">Editar Perfil</a>
        </div>
      </div>
      

      <div style={styles.secondContainer}>
        <div style={styles.headerContainer}>
          <p style={styles.title}>Vagas publicadas</p>
          <Button texto="Publicar vaga" onClick={handleSubmit}></Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: '#e0e0e0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflowY: 'auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: 890,
    height: 384,
    marginBottom: 10
  },
  name: {
    color: '#000000',
    fontWeight: 400,
    fontSize: '20px'
  },
  containerDescription: {
    display: 'flex',
    textAlign: 'justify',
    maxWidth: 240,
    height: 100,
  },
  description: {
    fontWeight: 400,
    fontSize: 12,
    color: '#474747'
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 349,
    height: 250,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 349,
    height: 300,
    marginLeft: 20
  },
  circle: {
    width: 126,
    height: 126,
    borderRadius: '80px',
    backgroundColor: '#D9D9D9'
  },
  link: { 
    color: '#5972F5',
    fontWeight: 400,
    fontSize: 12,
    marginRight: 30
  },
  link2: { 
    color: '#5972F5',
    fontWeight: 400,
    fontSize: 14,
    marginRight: 30
  },
  containerLocalization: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    marginTop: -50
  },
  textLocalization: {
    fontWeight: 400,
    fontSize: 12,
    color: '#000000'
  },
  point: {
    width: '4px',
    height: '4px',
    backgroundColor: '#494949',
    borderRadius: '2px',
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: 890,
    height: 384,
    marginBottom: 10
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 890,
    padding: 10
  },
  title: {
    fontWeight: 400,
    fontSize: 20,
    color: '#000000'
  },
};

export default Institution;