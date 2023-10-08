import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import appLogo from "../assets/appLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="w-full h-full">
      <nav className="w-[70%] max-w-6xl h-12 mx-auto flex justify-between items-center">
        <NavLink to="/">
          <div className="h-8 w-16 flex justify-center items-center ">
            <img src={appLogo} alt="logo" />
          </div>
        </NavLink>
        <div className="flex gap-4 justify-center items-center">
          <NavLink to="/">
            <p className="text-xl font-semibold">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className=" text-2xl text-slate-800" />
              {cart.length > 0 && (
                <div className="absolute -top-1.5 -right-3 ">
                  {" "}
                  <span className=" w-5 h-5 flex justify-center items-center  text-xs  font-semibold bg-green-600 text-slate-100 rounded-full animate-bounce">
                    {cart.length}{" "}
                  </span>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
