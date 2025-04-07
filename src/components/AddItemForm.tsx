"use client";
import { useState } from "react";
import { Item } from "@/types/item";

type Props = {
  onAddItem: (item: Item) => void;
};

const AddItemForm = ({ onAddItem }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if(!name || !price){
      alert("Preencha todos os campos!");
      return;
    }

    const newItem: Item = {
      id: String(Date.now()),
      name,
      price: Number(price),
      bought: false,
    }

    onAddItem(newItem);
    setName("");
    setPrice("");

  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="name">Item</label>
        <input
          id="name"
          type="text"
          placeholder="Digite o nome do Item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-500 rounded-md p-2 m-2"
        />
        <label htmlFor="price">Preço do Item</label>
        <input
          id="price"
          type="number"
          placeholder="Digite o preço do item"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-500 rounded-md p-2 m-2"
        />
        <button type='submit' className="cursor-pointer bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800 transition-colors">Adicionar Item</button>
      </div>
    </form>
  );
};

export default AddItemForm;
