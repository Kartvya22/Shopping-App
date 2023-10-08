import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="relative flex justify-center items-center mx-auto max-w-5xl">
      {cart.length > 0 ? (
        <div className=" flex justify-between items-center mx-auto gap-4 max-w-5xl max-lg:flex-col">
          <div className="w-[60%] pl-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="w-[35%] h-[70vh]  flex flex-col justify-center items-start gap-4 max-lg:items-center max-md:w-[90vw] lg:gap-20 lg:fixed lg:top-10 lg:right-0">
            <div className="flex flex-col justify-center items-start gap-2 text-green-700 max-md:justify-center max-md:items-center">
              <div className="text-xl font-semibold uppercase">Your Cart</div>
              <div className="text-4xl font-bold uppercase">Summary</div>
              <p className="text-lg font-semibold text-black text-opacity-70">
                Total Items : 
                <span className="font-bold text-lg text-black">  {cart.length} </span>
              </p>
            </div>
            <div className="flex flex-col gap-4 justify-center items-start max-md:justify-center max-md:items-center">
              <p className="text-black text-opacity-70 font-bold text-lg">
                Total Amount : <span className="text-black font-extrabold text-lg"> ${totalAmount.toString().split(".").slice(0,1)}</span>{" "}
              </p>
              <button className="font-semibold text-xl border-2 border-slate-950 px-8 py-2 rounded-lg md:hover:bg-slate-950 md:hover:text-white md:hover:scale-110 transition-all duration-300 ease-in"> Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-12 flex flex-col justify-center items-center mx-auto gap-6 max-md:w-[90vw]">
          <h1 className="text-3xl font-semibold text-center">Your Cart is empty ! </h1>
          <NavLink to="/">
            <button className="px-5 py-2 border-2 border-slate-900 rounded-lg text-xl font-medium md:hover:bg-slate-900 md:hover:text-white md:hover:scale-110 transition-all duration-300 ">
              Shop now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
