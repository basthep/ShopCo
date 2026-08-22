import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import OfferDisplay from "../../components/OfferDisplay/OfferDisplay";
import FooterSection from "../../components/FooterSection/FooterSection";

import CartBreadcrumb from "../../components/Cart/CartBreadcrumb";
import CartItems from "../../components/Cart/CartItems";
import OrderSummary from "../../components/Cart/OrderSummary";
import EmptyCart from "../../components/Cart/EmptyCart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createOrder } from "../../services/orderService";

import {
  getCart,
  updateCartItem,
  removeFromCart,
} from "../../services/cartService";


const CartPage = () => {

  const [cartItems, setCartItems] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const loadCart = async () => {

      try {

        const data = await getCart();

        const items = data.cart || [];

        const formattedItems = items.map(
          (item) => ({
            id: item.id,

            productId: item.product_id,

            name: item.name,

            size: item.size,

            color: item.color,

            price:
              Number(item.offer_price) ||
              Number(item.price),

            quantity: item.quantity,

            image:
              `http://localhost:5000/images/${item.images[0]}`,
          })
        );

        setCartItems(formattedItems);

      } catch (error) {

        console.error(
          "Error loading cart:",
          error
        );

        toast.error(
          error.response?.data?.message ||
          "Failed to load cart"
        );

      } finally {

        setLoading(false);

      }

    };

    loadCart();

  }, []);


  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );


  const discount = 0;

  const deliveryFee =
    cartItems.length > 0 ? 1 : 0;


  const increaseQty = async (id) => {

    const item =
      cartItems.find(
        (item) => item.id === id
      );

    if (!item) return;


    const newQuantity =
      item.quantity + 1;


    try {

      await updateCartItem(
        id,
        newQuantity
      );


      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        )
      );

    } catch (error) {

      console.error(
        "Error increasing quantity:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to update quantity"
      );

    }

  };


  const decreaseQty = async (id) => {

    const item =
      cartItems.find(
        (item) => item.id === id
      );

    if (!item || item.quantity <= 1)
      return;


    const newQuantity =
      item.quantity - 1;


    try {

      await updateCartItem(
        id,
        newQuantity
      );


      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item
        )
      );

    } catch (error) {

      console.error(
        "Error decreasing quantity:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to update quantity"
      );

    }

  };


  const removeItem = async (id) => {

    try {

      await removeFromCart(id);

      setCartItems((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );

      toast.success("Item removed from cart");

    } catch (error) {

      console.error(
        "Error removing cart item:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to remove item"
      );

    }

  };


  const handleCheckout = async () => {

    if (cartItems.length === 0) {

      toast.warning("Your cart is empty");

      return;

    }


    const confirmOrder = window.confirm(
      "Are you sure you want to proceed with this order?"
    );


    if (!confirmOrder) return;


    try {

      const items = cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
        price: item.price,
      }));


      const data = await createOrder(
        subtotal + deliveryFee,
        items
      );


      if (data.success) {

        setCartItems([]);

        toast.success(
          "Order placed successfully!"
        );

      } else {

        toast.error(
          "Failed to place order"
        );

      }

    } catch (error) {

      console.error(
        "Error placing order:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to place order"
      );

    }

  };


  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <p className="text-lg">
          Loading cart...
        </p>

      </div>
    );

  }


  return (
    <div className="min-h-screen bg-white">

      <OfferDisplay />

      <Navbar />

      <hr className="border-gray-200 w-[90%] mx-auto" />


      <main className="w-[90%] mx-auto py-8">

        <CartBreadcrumb />


        <h1 className="text-4xl font-extrabold mt-6 mb-6">
          YOUR CART
        </h1>


        {cartItems.length === 0 ? (

          <EmptyCart />

        ) : (

          <div className="grid lg:grid-cols-5 gap-8">

            <div className="lg:col-span-3">

              <CartItems
                cartItems={cartItems}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />

            </div>


            <div className="lg:col-span-2">

              <OrderSummary
                subtotal={subtotal}
                discount={discount}
                deliveryFee={deliveryFee}
                onCheckout={handleCheckout}
              />

            </div>

          </div>

        )}

      </main>


      <FooterSection />


      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
};


export default CartPage;