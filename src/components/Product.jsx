import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className=" h-[400px] flex flex-col justify-center items-center gap-2 px-2 py-4 mt-10 ml-10  rounded-xl md:hover:scale-110 transition-all duration-300 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {`${post.title.substring(0, 20)}...`}{" "}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-500 font-normal text-[10px] text-left">
          {`${post.description.split(" ").slice(0, 10).join(" ")}...`}{" "}
        </p>
      </div>
      <div className="h-[180px] ">
        <img src={`${post.image}`} alt="Product" className="h-full w-[250px] px-4" />
      </div>
      {/* <div className="w-full flex flex-wrap justify-between items-center px-4">
        
        </div> */}
      <div>
        <p className="text-green-600 font-bold">${post.price} </p>
      </div>
      <div className="text-xs max-h-7 px-3 py-1 border-2 border-slate-800 rounded-full font-semibold text-slate-800 md:hover:bg-slate-800 md:hover:text-white transition-all duration-200 ease-in ">
        {cart.some((p) => p.id === post.id) ? (
          <button className="uppercase max-h-8" onClick={removeFromCart}>
            Remove Item
          </button>
        ) : (
          <button className="uppercase max-h-8" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
