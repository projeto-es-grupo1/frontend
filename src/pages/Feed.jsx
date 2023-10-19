import { useState, useEffect } from 'react';
import { Box, Card, Container, CssBaseline, Typography } from '@mui/material';
import CardVaga from '../components/CardVaga';

const Feed = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

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
        { length: 10 },
        (_, index) => `Card ${cards.length + index + 1}`,
      );
      setCards((prevCards) => [...prevCards, ...newCards]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      loadMoreData();
    }
  };

  return (
    <Box style={{ backgroundColor: '#E2E5E9' }}>
      <Container maxWidth="md">
        <CssBaseline />
        <Typography variant="h4" gutterBottom style={{ marginBottom: '100px' }}>
          Feed
        </Typography>
        <Card
          sx={{ boxShadow: 4 }}
          style={{
            height: '820px',
            overflowY: 'auto',
            padding: '60px 116px',
            borderRadius: '8px',
          }}
          onScroll={handleScroll}
        >
          {cards.map((_, index) => (
            <CardVaga key={index} numero={index} />
          ))}
          {loading && <Typography>Loading...</Typography>}
        </Card>
      </Container>
    </Box>
  );
};

export default Feed;
