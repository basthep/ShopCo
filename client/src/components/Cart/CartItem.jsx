import React from "react";
import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

const CartItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
  isLast
}) => {
  return (
    <div className={`flex gap-5 pb-6 ${
        !isLast ? "border-b border-gray-300" : ""
        }`}
    >

      <img
        src={item.image}
        alt={item.name}
        className="w-28 h-28 object-cover rounded-xl"
      />

      <div className="flex-1">

        <div className="flex justify-between">

          <div>

            <h3 className="font-bold text-lg">
              {item.name}
            </h3>

            <p className="text-sm text-gray-500">
              Size : {item.size}
            </p>

            <p className="text-sm text-gray-500">
              Color : {item.color}
            </p>

          </div>

          <button onClick={() => removeItem(item.id)}>
            <Trash2
              className="text-red-500"
              size={18}
            />
          </button>

        </div>

        <div className="flex justify-between items-center mt-6">

          <h2 className="font-bold text-2xl">
            ${item.price}
          </h2>

          <div className="flex items-center gap-5 bg-gray-100 rounded-full px-5 py-2">

            <button
              onClick={() => decreaseQty(item.id)}
            >
              <Minus size={18} />
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item.id)}
            >
              <Plus size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartItem;