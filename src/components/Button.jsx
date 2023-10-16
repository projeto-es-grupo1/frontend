import React from 'react';

const Button = ({ texto, onClick }) => {

  return (
    <button style={styles.botao} onClick={onClick}>
      {texto}
    </button>
  );
};

const styles = {
    botao: {
        backgroundColor: '#1876D0',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: 283,
        height: 50,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
}

export default Button;