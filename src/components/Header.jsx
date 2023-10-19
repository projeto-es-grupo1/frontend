import { Box, Container } from '@mui/material';
import SearchAppBar from './SearchBar';

const Header = () => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', height: '140px' }}>
      <Box style={{ width: '100vw', height: '65px', backgroundColor: '#fff' }}>
        <Container maxWidth="md">
          <SearchAppBar />
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
