import { useState, useEffect, useCallback } from 'react';
import type { Item } from '../types/item';
import * as api from '../api/items';

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getItems();
      setItems(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while loading items.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const addItem = useCallback(async (name: string) => {
    setError(null);
    try {
      const newItem = await api.createItem(name);
      setItems((prev) => [newItem, ...prev]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while adding the item.');
      }
      throw err;
    }
  }, []);

  const toggleItem = useCallback(async (id: string, bought: boolean) => {
    setError(null);
    try {
      const updatedItem = await api.updateItem(id, bought);
      setItems((prev) =>
        prev.map((item) => (item._id === id ? updatedItem : item))
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while updating the item.');
      }
    }
  }, []);

  const deleteItem = useCallback(async (id: string) => {
    setError(null);
    try {
      await api.deleteItem(id);
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while deleting the item.');
      }
    }
  }, []);

  return { items, loading, error, addItem, toggleItem, deleteItem, setError };
}
