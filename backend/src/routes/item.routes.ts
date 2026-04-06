import { Router } from 'express';
import { getItems } from '../controllers/item/getItems.controller.ts';
import { createItem } from '../controllers/item/createItem.controller.ts';
import { deleteItem } from '../controllers/item/deleteItem.controller.ts';
import { updateItem } from '../controllers/item/updateItem.controller.ts';

const router = Router();
router.get('/', getItems);
router.post('/', createItem);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);

export default router;
