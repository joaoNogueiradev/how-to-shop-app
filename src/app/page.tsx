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

  const handleToggleBought = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Minha Lista de Compras</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ShoppingList items={items} onToggleBought={handleToggleBought} />
    </main>
  );
};

export default Page;
