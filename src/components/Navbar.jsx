import { appleImg, bagImg, blackImg, searchImg } from "../utils";
import {navLists} from "../constants";
export const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
      <nav className="flex w-full scrim-max-width">
        <img src={appleImg} width={14} height={18} alt="apple logo" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item, index) => (
            <div key={index} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};
