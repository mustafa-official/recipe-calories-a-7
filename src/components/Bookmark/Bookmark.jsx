import PropTypes from "prop-types";
import { useState } from "react";

const Bookmark = ({ cartInfo, index, handlePreparing, getVisibleBtn }) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(true);
  };

  return (
    <table className="bg-[#28282808] my-4 py-4">
      <tbody className="text-[#878787] font-medium">
        <tr>
          <td className="pl-2 lg:pl-4 text-[14px] lg:text-[16px]">
            {index + 1}
          </td>
          <td className="pl-2 lg:pl-4  py-2 w-[96px] text-[14px] lg:text-[16px]">
            {cartInfo.name}
          </td>
          <td className="pl-2 py-2 w-[88px] text-[14px] lg:text-[16px]">
            {cartInfo.time} min
          </td>
          <td className="pl-1  py-2 w-[114px] text-[14px] lg:text-[16px]">
            {cartInfo.calories} calories
          </td>
          <td>
            <button
              onClick={() => {
                handleVisible();
                handlePreparing(cartInfo);
                
                getVisibleBtn(visible);
              }}
              className="text-[#150B2B] bg-[#0BE58A] text-[14px] lg:text-[16px] sm:ml-auto px-3 py-1 rounded-full"
            >
              Preparing
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Bookmark.propTypes = {
  Bookmark: PropTypes.func,
  cartInfo: PropTypes.object,
  index: PropTypes.number,
  handlePreparing: PropTypes.func,
  getVisibleBtn: PropTypes.func,
};

export default Bookmark;
