import React from "react";
import CartItem from "./CartItem";

const CartItems = ({
  cartItems,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-300 p-6 space-y-6">
      {cartItems.map((item, index) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
          isLast={index === cartItems.length - 1}
        />
      ))}
    </div>
  );
};

export default CartItems;