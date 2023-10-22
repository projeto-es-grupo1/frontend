import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const EditProfileModal = ({ open, onClose, userData }) => {
  const [updatedData, setUpdatedData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSave = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Editar Perfil</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          name="nome"
          value={updatedData.nome}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={updatedData.email}
          onChange={handleInputChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileModal;
