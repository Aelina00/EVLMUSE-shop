import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../../src/App";

const SpecialCase = () => {
  const { user } = React.useContext(AppContext);
  const products = useSelector((state) => state.orebiReducer.products);

  // Получаем только имя пользователя из user.displayName
  const userName = user ? user.displayName.split(" ")[0] : "";

  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
        {!user && (
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
        )}
        {!user ? (
          <button
            className="blueBtn text-xs font-semibold font-titleFont"
            onClick={LogIn}
          >
            Sign in
          </button>
        ) : (
          <span className="text-xs font-semibold font-titleFont">
            {userName}
          </span>
        )}
        {user && (
          <div>
            <button className="icon">
              <Link to="/orders">
                <i className="fa-solid fa-user" />
              </Link>
            </button>
            <button
              className="blueBtn text-xs font-semibold font-titleFont"
              onClick={LogOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
      <Link to="/cart">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;