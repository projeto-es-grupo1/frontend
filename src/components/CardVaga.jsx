import { Box, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import ThumbsUpSvg from '../assets/ThumbsUpSvg';

// eslint-disable-next-line react/prop-types
const CardVaga = ({ numero }) => {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(25);

  const handleLikeClick = () => {
    if (like) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLike(!like);
  };

  return (
    <Card
      sx={{ boxShadow: 4 }}
      style={{
        display: 'grid',
        maxWidth: '600px',
        padding: '32px',
        gap: '30px',
        marginBottom: '42px',
      }}
    >
      <Typography variant="h6" style={{ gridColumn: '1/3' }}>
        {numero} FrontEnd Developer with React and Vite
      </Typography>
      <Typography
        variant="body2"
        style={{ gridColumn: '1/3', textAlign: 'justify' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </Typography>
      <Typography variant="subtitle2" style={{ gridColumn: '3/3' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elie.
      </Typography>
      <Box
        style={{
          display: 'flex',
          gridColumn: '1/4',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="contained">Enviar Curriculo</Button>
        <Box
          onClick={handleLikeClick}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          {likes}
          <ThumbsUpSvg color={like ? '#18D0C5' : '#595959'} />
        </Box>
      </Box>
    </Card>
  );
};

export default CardVaga;
