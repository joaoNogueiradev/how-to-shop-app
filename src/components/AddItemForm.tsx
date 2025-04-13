"use client";
import { useState } from "react";
import { Item } from "@/types/item";

type Props = {
  onAddItem: (item: Item) => void;
};

const AddItemForm = ({ onAddItem }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Preencha todos os campos!");
      return;
    }

    const newItem: Item = {
      id: String(Date.now()),
      name,
      price: Number(price),
      bought: false,
    };

    onAddItem(newItem);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nome do Item
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite o nome do item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Preço do Item
        </label>
        <input
          id="price"
          type="number"
          placeholder="Digite o preço do item"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Adicionar Item
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
