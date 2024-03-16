import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
const Carts = ({ allCart, handleBtn }) => {
  const { name, image, description, ingredients, time, calories } = allCart;
  return (
    <div className="border-[2px] rounded-xl p-5">
      <img className="w-full rounded-xl" src={image} alt="" />
      <h2 className="font-semibold text-xl text-[#282828] mt-6">{name}</h2>
      <p className="text-[#878787] text-[16px] mt-3">{description}</p>
      <hr className="my-4" />
      <h2 className="text-[#282828] text-[18px] font-medium">
        Ingredients: {ingredients.length}
      </h2>
      <ul className="text-[#878787] text-[18px] mt-2">
        {ingredients.map((data, idx) => (
          <li className="flex items-center" key={idx}>
            <BsDot></BsDot>
            {data}
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="flex items-center gap-5 text-[#282828CC] text-[16px]">
        <p className="flex items-center gap-1">
          <IoMdTime className="text-xl"></IoMdTime>
          {time}
        </p>
        <p className="flex items-center gap-1">
          <AiOutlineFire className="text-xl"></AiOutlineFire>
          {calories}
        </p>
      </div>
      <button
        onClick={() => handleBtn(allCart)}
        className="text-[#150B2B] px-4 lg:px-5 py-1 lg:py-2 rounded-[50px] bg-[#0BE58A] mt-4 text-[16px] lg:text-[18px] font-medium"
      >
        Want to Cook
      </button>
    </div>
  );
};

Carts.propTypes = {
  Carts: PropTypes.func,
  allCart: PropTypes.object,
  handleBtn: PropTypes.func,
};

export default Carts;
