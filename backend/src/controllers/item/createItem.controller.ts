import type { Request, Response } from 'express';
import * as ItemService from '../../services/item.service.ts';
import { ValidationError, NotFoundError } from '../../utils/errors.ts';

type CreateItemBody = {
  name: string;
};
export async function createItem(
  req: Request<{}, {}, CreateItemBody>,
  res: Response
) {
  try {
    const { name } = req.body;
    const newItem = await ItemService.createNewItem(name);
    return res.status(201).json(newItem);
  } catch (error: unknown) {
    if (error instanceof ValidationError || error instanceof NotFoundError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    console.error('Unexpected error:', error);
    return res.status(500).json({ message: 'An unexpected error occurred.' });
  }
}
