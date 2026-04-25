import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Images from "@/component/common/Images";
import allIcons from "@/helper/iconProvider";

const initialCart = [
  {
    id: 1,
    name: "Premium Headphone",
    price: 120,
    quantity: 1,
    color: "Black",
    size: "M",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 80,
    quantity: 2,
    color: "Black",
    size: "L",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

const AddToCart = ({ onClose }) => {
  const { close } = allIcons;

  const [cartItems, setCartItems] = useState(initialCart);

  const wrapperRef = useRef(null);

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // SUBTOTAL
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  // REMOVE ITEM
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // INCREASE
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full lg:w-105 h-full bg-white flex flex-col shadow-lg"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-5 border-b">
        <p className="text-sm font-medium tracking-wide">
          SHOPPING BAG ({cartItems.length})
        </p>

        <button
          onClick={() => onClose(false)}
          className="text-2xl cursor-pointer"
        >
          {close}
        </button>
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Your cart is empty
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 pb-4 border-b relative"
            >
              {/* REMOVE */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-0 right-0 text-gray-500"
              >
                ×
              </button>

              {/* IMAGE */}
              <div className="w-24 h-24 bg-gray-100">
                <Images
                  imgSrc={item.image}
                  imgAlt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 flex flex-col justify-center gap-1">

                <p className="text-sm font-medium">{item.name}</p>

                <p className="text-xs text-gray-500">
                  Color: {item.color}
                </p>

                <p className="text-xs text-gray-500">
                  Size: {item.size}
                </p>

                {/* QUANTITY + PRICE */}
                <div className="flex justify-between items-center mt-2">

                  <div className="flex items-center gap-3">
                    <button onClick={() => decreaseQty(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>
                      +
                    </button>
                  </div>

                  <p className="font-medium">
                    ${item.price * item.quantity}
                  </p>
                </div>

              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="px-6 py-4 border-t">

        <div className="flex justify-between mb-4">
          <p className="font-medium">SUBTOTAL:</p>
          <p className="font-medium">${subtotal}</p>
        </div>

        <Link
          to="/cart"
          className="block text-center border py-3 mb-3 hover:bg-black hover:text-white transition"
        >
          VIEW CART
        </Link>

        <Link
          to="/checkout"
          className="block text-center bg-black text-white py-3 hover:bg-red-500 transition"
        >
          CHECKOUT
        </Link>

      </div>
    </div>
  );
};

export default AddToCart;