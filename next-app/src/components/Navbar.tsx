import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-around border-b-2 border-blue-400 h-20 w-full">
      <h1 className="text-bold text-3xl tracking-[1.5px] text-[#000000] dark:text-white ">
        NFT Generator 🚀
      </h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
