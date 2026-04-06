import type { Request, Response } from 'express';
import * as ItemService from '../../services/item.service.ts';

export async function getItems(req: Request, res: Response) {
  const items = await ItemService.getAllItems();
  return res.status(200).json(items);
}
