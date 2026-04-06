import mongoose, { Schema } from 'mongoose';

export interface Item {
  name: string;
  bought: boolean;
  createdAt: Date;
  updatedAt: Date;
}
const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bought: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const ItemModel = mongoose.model('Item', itemSchema);
