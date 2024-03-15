import PropTypes from "prop-types";
import food from "../../images/food.png";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
const Carts = () => {
  return (
    <div className="border-[2px] rounded-xl p-5">
      <img src={food} alt="" />
      <h2 className="font-semibold text-xl text-[#282828] mt-6">
        Spaghetti Bolognese
      </h2>
      <p className="text-[#878787] text-[16px] mt-3">
        Classic Italian pasta dish with savory meat sauce.
      </p>
      <hr className="my-4" />
      <h2 className="text-[#282828] text-[18px] font-medium">Ingredients: 6</h2>
      <ul className="text-[#878787] text-[18px] mt-2">
        <li className="flex items-center">
          <BsDot></BsDot> 500g ground beef
        </li>
        
      </ul>
      <hr className="my-4" />
      <div className="flex items-center gap-5 text-[#282828CC] text-[16px]">
        <p className="flex items-center gap-1">
          <IoMdTime className="text-xl"></IoMdTime> 30 minutes
        </p>
        <p className="flex items-center gap-1">
          <AiOutlineFire className="text-xl"></AiOutlineFire> 600 calories
        </p>
      </div>
      <button className="text-[#150B2B] px-5  py-2 rounded-[50px] bg-[#0BE58A] mt-4 text-[18px] font-medium">
        Want to Cook
      </button>
    </div>
  );
};

Carts.propTypes = {};

export default Carts;
