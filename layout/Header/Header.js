import React from "react";
import Image from "next/image";
import { ArrowDown, Search, Menu } from "react-feather";
import { navigationData } from "routes/navigationData";

const Header = () => {
  return (
    <div className="px-4 lg:px-24 py-7 shadow-md">
      <div className="flex items-center justify-between w-full">
        <div>
          <Image src="/images/logo.svg" alt="" width={230} height={100} />
        </div>
        <div className="w-1/2">
          <div className="flex items-center bg-gray-200/40 px-2">
            <Search size={18} className="font-semibold" />
            <input
              type="search"
              placeholder="What are you looking for?"
              className="bg-transparent w-full p-2 outline-none placeholder:text-slate-700 placeholder:font-normal"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Cart Icon With Price */}
          <div className="flex items-center gap-6">
            <div className="flex relative">
              <Image
                src="/images/icon/furniturestore-cart.svg"
                width={20}
                height={20}
                alt=""
              />
              <span className="flex items-center  justify-center bg-black text-white w-5 h-5 rounded-full p-1 text-xs absolute -top-2 -right-4">
                2
              </span>
            </div>
            <span className="font-semibold">$30.00</span>
          </div>
          {/*WishList  */}
          <div className="flex relative">
            <Image
              src="/images/icon/furniturestore-wishlist.svg"
              width={20}
              height={20}
              alt=""
            />
            <span className="flex items-center  justify-center bg-black text-white w-5 h-5 rounded-full p-1 text-xs absolute -top-2 -right-4">
              2
            </span>
          </div>
          {/* User Login */}
          <div className="flex relative">
            <Image
              src="/images/icon/furniturestore-user.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
          {/* Menu Icon */}
          <div className="block lg:hidden">
            <Menu size={24} />
          </div>
        </div>
      </div>
      {/* Navigation Menu */}
      <div className="w-full justify-between pt-6 px-6 hidden md:flex">
        {navigationData.map((menu) => (
          <div className="flex items-center justify-center w-full">
            <div className="flex w-full flex-col items-center justify-center border-r-2 border-gray-100">
              <Image src={menu.icon} alt="" width={35} height={35} />
              <div className="flex items-center gap-2 text-slate-700">
                <span className="uppercase font-medium text-sm">
                  {menu.title}
                </span>
                <ArrowDown />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
