import PropTypes from "prop-types";
import { IoMdContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="lg:mt-8 mt-4">
      <div className="navbar flex justify-between">
        <div>
          <div className="dropdown">
            <div
              tabIndex={"0"}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={"0"}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-[#1DD100] rounded-box w-52"
            >
              <li>
                <a className="text-white text-[16px]" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white text-[16px]" href="">
                  Recipes
                </a>
              </li>
              <li>
                <a className="text-white text-[16px]" href="">
                  About
                </a>
              </li>
              <li>
                <a className="text-white text-[16px]" href="">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div className="pr-1 md:pr-0 lg:pr-0">
            <a
              href=""
              className="text-black text-xl md:text-2xl lg:text-4xl font-bold raleway"
            >
              Recipe Calories
            </a>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-0 lg:px-1 flex items-center gap-0 lg:gap-4 raleway font-medium">
            <li>
              <a className="text-[#150B2BB3] text-[18px]" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-[#150B2BB3] text-[18px]" href="">
                Recipes
              </a>
            </li>
            <li>
              <a className=" text-[#150B2BB3] text-[18px]" href="">
                About
              </a>
            </li>
            <li>
              <a className="text-[#150B2BB3] text-[18px]" href="">
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="lg:flex items-center hidden relative">
            <input
              type="text"
              placeholder="Search"
              className="input-bordered outline-none pl-10 py-3 w-full max-w-xs rounded-full bg-[#150B2B0D]"
            />
            <div className="absolute left-4">
              <CiSearch className="text-[18px] text-black"></CiSearch>
            </div>
          </div>
          <div>
            <button className="rounded-full justify-center p-1 lg:p-2 text-2xl lg:text-3xl bg-[#0BE58A]">
              <IoMdContact></IoMdContact>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  Header: PropTypes.func,
};

export default Header;
