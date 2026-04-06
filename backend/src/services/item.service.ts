import mongoose from 'mongoose';
import { ItemModel } from '../models/item.model.ts';
import { ValidationError, NotFoundError } from '../utils/errors.ts';

export async function getAllItems() {
  const items = await ItemModel.find().sort({ createdAt: -1 }).lean();
  return items;
}

export async function createNewItem(name: string) {
  if (typeof name !== 'string') {
    throw new ValidationError('Item name must be a string.');
  }

  name = name.trim();
  if (name === '') {
    throw new ValidationError('Item name is required and cannot be empty.');
  }

  const item = await ItemModel.create({ name });
  return item;
}

export async function updateItemById(id: string, bought: boolean) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ValidationError('Invalid item ID.');
  }

  const updatedItem = await ItemModel.findByIdAndUpdate(id, { bought }, { returnDocument: 'after' }).lean();
  if (!updatedItem) {
    throw new NotFoundError('Item not found.');
  }

  return updatedItem;
}

export async function deleteItemById(id: string) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ValidationError('Invalid item ID.');
  }

  const deletedItem = await ItemModel.findByIdAndDelete(id).lean();
  if (!deletedItem) {
    throw new NotFoundError('Item not found.');
  }

  return deletedItem;
}
