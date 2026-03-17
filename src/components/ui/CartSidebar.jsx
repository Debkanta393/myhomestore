import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartItems,
  selectCartCount,
  selectCartItems,
  selectTotalPrice,
} from "../../features/cart/cart";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { addCartItems, removeCartItems } from "../../features/cart/cart";

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCart = useSelector(selectCartCount);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const [totalPrice, setTotalPrice]=useState(0)

  useEffect(() => {
    if (isOpen) dispatch(fetchCartItems({ isAuthenticated }));
  }, [isOpen]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal - shipping;

  return (
    <motion.div
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      exit={{ x: 400 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 right-0 h-screen w-11/12 md:w-[500px] bg-white z-[9999] p-6 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform`}
    >
      <h2 className="font-semibold text-3xl">
        Your Cart{" "}
        <span className="font-normal text-[#998e8a] text-2xl">
          ({totalCart})
        </span>
      </h2>
      <div
        className="absolute top-6 right-10 hover:bg-[#f5efed] cursor-pointer p-2 hover:shadow-md rounded"
        onClick={() => onClose()}
      >
        <X />
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto md:p-4 space-y-4 h-8/12">
        {cartItems?.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">Your cart is empty</p>
        ) : (
          cartItems?.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))
        )}
      </div>

      {/* Payment summary */}
      <div
        className="absolute bottom-0 left-6 right-6 h-3/12 bg-white"
        style={{ zIndex: 10 }}
      >
        <h3 className="font-semibold text-2xl">Payment Summary</h3>
        <div className="space-y-2 mt-3">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>$ {totalPrice}</p>
          </div>
        </div>

        <button className="w-full mt-4 bg-[#998e8a] text-white text-lg py-3 cursor-pointer">
          Check Out
        </button>
      </div>
    </motion.div>
  );
};

// ── Single Cart Item ──────────────────────────────────────────────
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const handleIncrease = () => {
  //   dispatch(addCartItems({ productId: item.productId, isAuthenticated }));
  // };

  // const handleDecrease = () => {
  //   if (item.quantity > 1) {
  //     dispatch(
  //       updateCartItem({
  //         productId: item.productId,
  //         quantity: item.quantity - 1,
  //         isAuthenticated,
  //       }),
  //     );
  //   }
  // };

  const handleRemove = ({productId, quantity, wastage}) => {
    dispatch(removeCartItems({ productId, isAuthenticated, quantity, wastage }));
    dispatch(fetchCartItems({ isAuthenticated }));
  };

  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-5 py-3  hover:shadow-xl shadow-gray-300 md:px-6 rounded-xl">
        <img src={item?.image?.url} alt="" className="w-24 h-24 bg-gray-200" />
        <div className="flex-1 space-y-1">
          <div className="flex justify-between">
            <h5 className="text-xl font-medium w-2/3">{item.name}</h5>
            {/* <div className="flex items-center gap-2 w-1/3">
              <button className="p-2 hover:shadow-md rounded cursor-pointer" onClick={handleDecrease}>
                -
              </button>
              <p>1</p>
              <button className="p-2 hover:shadow-md rounded cursor-pointer" onClick={handleIncrease}>
                +
              </button>
            </div> */}
          </div>
          <p className="text-md text-gray-500">${item?.price}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              <p>Qty: {item?.quantity}</p>
              <p>Size: XL</p>
            </div>
            <div
              className="p-2 rounded hover:shadow-md cursor-pointer text-red-600"
              onClick={()=> handleRemove({productId: item.productId, quantity: item.quantity, wastage: item.wastage})}
            >
              <Trash2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
