"use client";
import AddItemForm from "@/components/AddItemForm";
import ShoppingList from "@/components/ShoppingList";
import { Item } from "@/types/item";
import { useState } from "react";

const Page = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (item: Item) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <main className="p-3">
      <h1 className="text-2xl font-bold mb-4">Minha Lista de Compras</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ShoppingList items={items} />
    </main>
  );
};

export default Page;
