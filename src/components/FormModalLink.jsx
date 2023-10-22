import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, Link } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// eslint-disable-next-line react/prop-types
const FormModalLink = ({ link, forms, formsTitle }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link sx={{ cursor: 'pointer' }} underline="hover" onClick={handleOpen}>
        {link}
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {formsTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {forms}
          </Typography>
        </Card>
      </Modal>
    </div>
  );
};

export default FormModalLink;
