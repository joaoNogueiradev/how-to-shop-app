'use client'
import AddItemForm from "@/components/AddItemForm";
import { Item } from "@/types/item";

const Page = () => {
  const handleAddItem = (item: Item) => {
    console.log("Item recebido no componente pai:", item);
  };

  return (
    <main>
      <AddItemForm onAddItem={handleAddItem} />
    </main>
  );
};

export default Page;