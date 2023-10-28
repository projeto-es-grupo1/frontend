import React, { useState, useEffect } from 'react';
import { Box, Card, Container, CssBaseline, Typography } from '@mui/material';
import CardVaga from '../components/CardVaga';
import Header from '../components/Header';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { toast } from 'react-toastify';
// import Header from '../components/Header';

const Feed = () => {
  const { user } = React.useContext(AuthContext);

  const [cards, setCards] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(false);

  const getVagasData = async () => {
    if (user != null) {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/vagas`,
        );
        setVagas(res.data);
        console.log(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  React.useEffect(() => {
    getVagasData();
  }, [user]);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = () => {
    // Simulando o carregamento inicial com 20 cards.
    const initialCards = Array.from(
      { length: 10 },
      (_, index) => `Card ${index + 1}`,
    );
    setCards(initialCards);
  };

  const loadMoreData = () => {
    // Simulando o carregamento de mais 10 cards.
    setLoading(true);
    setTimeout(() => {
      const newCards = Array.from(
        { length: 5 },
        (_, index) => `Card ${cards.length + index + 1}`,
      );
      setCards((prevCards) => [...prevCards, ...newCards]);
      setLoading(false);
    }, 1000);
  };

  let isLoading = false;

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    const marginOfError = 100;

    if (
      !isLoading &&
      scrollHeight - scrollTop <= clientHeight + marginOfError
    ) {
      isLoading = true; // Defina a variável de controle para evitar chamadas repetidas
      loadMoreData().then(() => {
        isLoading = false; // Redefina a variável de controle após o carregamento de dados
      });
    }
  };

  return (
    <Box
      style={{
        backgroundColor: '#E2E5E9',
        minHeight: '100vh',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}
    >
      <Header />
      <Container maxWidth="md">
        <CssBaseline />
        <Card
          sx={{ boxShadow: 4, position: 'fixed', bottom: 0 }}
          style={{
            maxHeight: '86%',
            overflowY: 'auto',
            padding: '60px 116px',
            borderRadius: '8px 0 0 0',
          }}
          onScroll={handleScroll}
        >
                {vagas && vagas.length > 0 ? (
                  vagas.map((vaga, index) => (
                    <CardVaga vaga={vaga} key={index} />
                  ))
                ) : (
                  <Typography variant="body2">Nenhuma vaga publicada ainda.</Typography>
                )}
        </Card>
      </Container>
    </Box>
  );
};

export default Feed;
