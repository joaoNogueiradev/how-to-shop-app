import { Item } from "@/types/item";

type Props = {
  items: Item[];
};

const ShoppingList = ({ items }: Props) => {
  return (
    <div>
      <h2 className="text-x1 font-bold mb-4">Itens Adicionados</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="border p-2 rounded-md flex justify-between items-center"
          >
            <span>{item.name}</span>
            <span>R$ {item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
