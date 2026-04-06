"use client";

import { useItems } from '@/hooks/useItems';
import Header from '@/components/Header';
import ItemList from '@/components/ItemList';
import AddItem from '@/components/AddItem';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';

export default function Home() {
  const {
    items,
    loading,
    error,
    toggleItem,
    deleteItem,
    addItem,
    setError,
  } = useItems();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <AddItem loading={loading} addItem={addItem} setError={setError} />

        {error && <Typography color="error" align="center">{error}</Typography>}

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <ItemList
            items={items}
            onToggle={toggleItem}
            onDelete={deleteItem}
          />
        )}
      </Container>
    </Box>
  );
}
