import type { Item } from '../types/item';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  item: Item;
  onToggle: (id: string, bought: boolean) => void;
  onDelete: (id: string) => void;
};

function ItemRow({ item, onToggle, onDelete }: Props) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          title='Löschen'
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(item._id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        title='Gekauft?'
        edge="start"
        checked={item.bought}
        onChange={(e) => onToggle(item._id, e.target.checked)}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText
        primary={item.name}
        sx={{ textDecoration: item.bought ? 'line-through' : 'none', opacity: item.bought ? 0.5 : 1 }}
      />
    </ListItem>
  );
}

export default ItemRow;
