import type { Request, Response } from 'express';
import * as ItemService from '../../services/item.service.ts';
import { ValidationError, NotFoundError } from '../../utils/errors.ts';

export async function deleteItem(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const { id } = req.params;
    await ItemService.deleteItemById(id);

    return res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof ValidationError || error instanceof NotFoundError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    console.error('Unexpected error in deleteItem:', error);
    return res.status(500).json({ message: 'An unexpected error occurred.' });
  }
}
