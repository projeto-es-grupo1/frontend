import { Box, Container } from '@mui/material';
import SearchAppBar from './SearchBar';
import AccountMenu from './Profile';

const Header = () => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', height: '140px', marginBottom: '1rem'}}>
      <Box style={{ width: '100vw', height: '65px', backgroundColor: '#fff' }}>
        <Container maxWidth="md">
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '12px',
            }}
          >
            <SearchAppBar />
            <AccountMenu />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
