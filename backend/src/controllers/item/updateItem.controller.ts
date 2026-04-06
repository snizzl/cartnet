import type { Request, Response } from 'express';
import * as ItemService from '../../services/item.service.ts';
import { ValidationError, NotFoundError } from '../../utils/errors.ts';

type UpdateItemBody = {
  bought: boolean;
};
export async function updateItem(
  req: Request<{ id: string }, {}, UpdateItemBody>,
  res: Response
) {
  try {
    const { id } = req.params;
    const { bought } = req.body;
    const updatedItem = await ItemService.updateItemById(id, bought);

    return res.status(201).json(updatedItem);
  } catch (error: unknown) {
    if (error instanceof ValidationError || error instanceof NotFoundError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    console.error('Unexpected error:', error);
    return res.status(500).json({ message: 'An unexpected error occurred.' });
  }
}
