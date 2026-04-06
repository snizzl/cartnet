import {
  Button,
  TextField,
  Box,
} from '@mui/material';
import { useState } from 'react';

type Props = {
  loading: boolean;
  addItem: (name: string) => Promise<void>;
  setError: (message: string | null) => void;
};

function AddItem({ loading, addItem, setError }: Props) {
  const [input, setInput] = useState('');

  async function handleAdd() {
    if (!input.trim()) {
      setError('Gib bitte einen Produktnamen ein.');
      return;
    }

    try {
      await addItem(input);
      setInput('');
    } catch (err) {
      console.error('Produkt hinzufügen fehlgeschlagen:', err);
    }
  }

  return (
    <Box component="form" sx={{ display: 'flex', gap: 1, mb: 4 }} onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Produktname..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }} disabled={loading}>
        Hinzufügen
      </Button>
    </Box>
  );
}

export default AddItem;
