import { useState, useEffect } from 'react';
import { Card, CardContent, Container, CssBaseline, Typography } from '@mui/material';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = () => {
    // Simulando o carregamento inicial com 20 cards.
    const initialCards = Array.from({ length: 20 }, (_, index) => `Card ${index + 1}`);
    setCards(initialCards);
  };

  const loadMoreData = () => {
    // Simulando o carregamento de mais 10 cards.
    setLoading(true);
    setTimeout(() => {
      const newCards = Array.from({ length: 10 }, (_, index) => `Card ${cards.length + index + 1}`);
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
    <Container maxWidth="md" >
      <CssBaseline />
      <Typography variant="h4" gutterBottom style={{marginBottom: '100px'}}>
        Feed
      </Typography>
      <Card style={{ height: '500px', overflowY: 'auto', padding: '40px'}} onScroll={handleScroll}>
        {cards.map((card, index) => (
          <Card key={index} style={{ marginBottom: '16px' }}>
            <CardContent>
              {card}
            </CardContent>
          </Card>
        ))}
        {loading && <Typography>Loading...</Typography>}
      </Card>
    </Container>
  );
};

export default App;
