import { Item } from "@/types/item";

type Props = {
  items: Item[];
  onToggleBought: (id: string) => void;
};

const ShoppingList = ({ items, onToggleBought }: Props) => {
  return (
    <>
      <div>
        <h2 className="text-x1 font-bold mb-4">Itens Adicionados</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="border p-2 rounded-md flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span
                  className={item.bought ? "line-through text-gray-500" : ""}
                >
                  {item.name}
                </span>
                <span
                  className={item.bought ? "line-through text-gray-500" : ""}
                >
                  R$ {item.price.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => onToggleBought(item.id)}
                className={`text-sm px-3 py-1 rounded ${
                  item.bought ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
              >
                {item.bought ? "Comprado" : "Marcar"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShoppingList;
