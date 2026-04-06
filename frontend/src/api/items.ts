import type { Item } from "../types/item";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getItems(): Promise<Item[]> {
  const res = await fetch(`${API_URL}/items`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to fetch items');
  }
  return res.json() as Promise<Item[]>;
}

export async function createItem(name: string): Promise<Item> {
  const res = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to create item');
  }
  return res.json() as Promise<Item>;
}

export async function updateItem(id: string, bought: boolean): Promise<Item> {
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bought }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to update item');
  }
  return res.json() as Promise<Item>;
}

export async function deleteItem(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to delete item');
  }
}
