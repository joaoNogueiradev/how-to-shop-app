"use client";
import { useState } from "react";
import { Item } from "@/types/item";

type Props = {
  onAddItem: (item: Item) => void;
};

const AddItemForm = ({ onAddItem }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  console.log(name, price, setPrice, onAddItem);

  return (
    <form className="flex justify-center items-center h-screen">
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
      </div>
    </form>
  );
};

export default AddItemForm;
