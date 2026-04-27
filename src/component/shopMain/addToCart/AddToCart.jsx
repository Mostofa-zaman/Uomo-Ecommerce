import allIcons from "@/helper/iconProvider";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Images from "@/component/common/Images";
import useCartStore from "@/store/cartSlice";

const AddToCart = ({ unMount }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const { close } = allIcons;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const navtabRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (navtabRef.current && !navtabRef.current.contains(event.target)) {
        unMount(null);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [unMount]);

  
  const getImage = (item) => {
    if (item.thumbnail) return item.thumbnail; 
    if (item.image) return item.image; 
    if (item.images?.length > 0) return item.images[0]; 
    return null;
  };

  return (
    <div
      ref={navtabRef}
      className="w-full lg:w-105 h-full bg-white flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-footer">
        <p className="texts_16_medium text-head tracking-wider">
          SHOPPING BAG ( {cartItems.length} )
        </p>
        <span
          className="text-2xl cursor-pointer"
          onClick={() => unMount(false)}
        >
          {close}
        </span>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-y-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-y-3 text-center">
            <p className="texts_14_medium text-second">Your bag is empty.</p>
            <button
              onClick={() => unMount(false)}
              className="texts_13_regular text-head underline underline-offset-2 cursor-pointer"
            >
              <Link to={"/shop"}>Continue Shopping</Link>
            </button>
          </div>
        ) : (
          cartItems.map((item) => {
            const imgSrc = getImage(item);
            const itemName = item.name || item.title || "Product";

            return (
              <div
                key={item.id}
                className="relative flex gap-x-4 pb-4 border-b border-footer"
              >
                {/* Remove Button */}
                <span
                  className="absolute top-0 right-0 text-lg cursor-pointer text-head hover:text-red-500 transition-colors"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </span>

                {/* Image */}
                <div className="w-25 h-25 bg-secondbg shrink-0">
                  {imgSrc ? (
                    <Images
                      imgSrc={imgSrc}
                      imgAlt={itemName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondbg" />
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center gap-y-1 flex-1 pr-5">
                  {/* Name / Title */}
                  <p className="texts_14_medium text-second line-clamp-2">
                    {itemName}
                  </p>

                  {/* Category */}
                  {item.category && (
                    <p className="texts_13_regular text-second capitalize">
                      {item.category}
                    </p>
                  )}

                  {/* SKU */}
                  {item.sku && (
                    <p className="texts_13_regular text-[#767676]">
                      SKU: {item.sku}
                    </p>
                  )}

                  {/* Color & Size — optional fields */}
                  {(item.color || item.size) && (
                    <div className="flex gap-x-3">
                      {item.color && (
                        <p className="texts_13_regular text-second">
                          Color: {item.color}
                        </p>
                      )}
                      {item.size && (
                        <p className="texts_13_regular text-second">
                          Size: {item.size}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Quantity + Price */}
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex items-center gap-x-3 border border-footer px-2 py-0.5">
                      <button
                        className="text-head texts_14_regular cursor-pointer hover:text-red-500 transition-colors"
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) - 1)
                        }
                      >
                        -
                      </button>
                      <span className="texts_14_regular text-head min-w-[16px] text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        className="text-head texts_14_regular cursor-pointer hover:text-green-600 transition-colors"
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity || 1) + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="texts_14_regular text-head">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="px-6 pb-6 flex flex-col gap-y-3 border-t border-footer pt-4">
          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <p className="texts_14_medium text-head tracking-wider">
              SUBTOTAL:
            </p>
            <p className="texts_14_medium text-head">${subtotal.toFixed(2)}</p>
          </div>

          {/* Clear Cart */}
          <button
            onClick={clearCart}
            className="w-full text-center texts_13_regular text-[#767676] hover:text-red-500 transition-colors cursor-pointer underline underline-offset-2"
          >
            Clear All
          </button>

          {/* View Cart */}
          <Link
            to="/cart"
            onClick={() => unMount(false)}
            className="w-full border border-head text-center texts_14_medium text-head py-3 lg:pt-5.5 lg:pb-3.5 cursor-pointer hover:bg-head hover:text-white transition-all"
          >
            VIEW CART
          </Link>

          {/* Checkout */}
          <Link
            to="/cart/shoping-and-checkout"
            onClick={() => unMount(false)}
            className="w-full bg-head text-white py-3.5 lg:pt-5.5 lg:pb-3.5 hover:bg-[#DB4444] transition-all mt-1 leading-6 text-center texts_14_medium cursor-pointer"
          >
            CHECKOUT
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
