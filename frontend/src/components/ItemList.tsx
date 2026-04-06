import type { Item } from '../types/item';
import ItemRow from './ItemRow';
import { isEasterTime } from '../utils/date';
import { List, Paper, Typography } from '@mui/material';

type Props = {
  items: Item[];
  onToggle: (id: string, bought: boolean) => void;
  onDelete: (id: string) => void;
};

function ItemList({ items, onToggle, onDelete }: Props) {
  if (items.length === 0) {
    return (
      <Typography align="center" sx={{ mt: 4, fontStyle: 'italic' }}>
        {isEasterTime() ? '🥚, 🥚, 🥚' : 'Ei, ei, ei'}. Deine Liste ist ja leer!
      </Typography>
    );
  }

  return (
    <Paper elevation={2}>
      <List>
        {items.map((item) => (
          <ItemRow
            key={item._id}
            item={item}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Paper>
  );
}

export default ItemList;
