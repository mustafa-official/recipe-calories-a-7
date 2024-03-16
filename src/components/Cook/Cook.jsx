import PropTypes from "prop-types";

const Cook = ({ preparingInfo, idx }) => {
  return (
    <div>
      <table className="bg-[#28282808] my-4 w-full">
        <tbody className="text-[#878787] font-medium ">
          <tr className="p-4">
            <td className="text-[14px] py-4 lg:text-[16px]">{idx + 1}</td>
            <td className="py-2  text-[14px] lg:text-[16px]">
              {preparingInfo.name}
            </td>
            <td className="text-[14px] lg:text-[16px]">
              {preparingInfo.time} min
            </td>
            <td className="text-[14px] lg:text-[16px]">
              {preparingInfo.calories} calories
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

Cook.propTypes = {
  Cook: PropTypes.func,
  preparingInfo: PropTypes.object,
  idx: PropTypes.number,
};

export default Cook;
