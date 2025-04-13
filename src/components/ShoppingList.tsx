import { Item } from "@/types/item";

type Props = {
  items: Item[];
  onToggleBought: (id: string) => void;
};

const ShoppingList = ({ items, onToggleBought }: Props) => {
  return (
    <div className="w-full max-w-md mt-6">
      <ul className="bg-white rounded-xl shadow-md overflow-hidden divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="flex items-center px-4 py-3">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={item.bought}
              onChange={() => onToggleBought(item.id)}
              className="w-5 h-5 accent-black mr-4"
            />

            {/* Informações */}
            <div className="flex-1">
              <p
                className={`text-base font-medium ${
                  item.bought ? "line-through text-gray-400" : "text-gray-900"
                }`}
              >
                {item.name}
              </p>
              <p
                className={`text-sm ${
                  item.bought ? "line-through text-gray-300" : "text-gray-500"
                }`}
              >
                R$ {item.price.toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
