import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import Total from "../../Total/Total";

const CurrentCook = ({ preparing,getValue,time,calories }) => {
  return (
    <div className="mt-6">
      <h2 className="text-center text-[#282828] text-2xl font-semibold">
        Currently cooking: {preparing.length}
      </h2>
      <hr className="my-5" />
      <table className="w-full">
        <thead className="text-[#878787] font-medium">
          <tr>
            <th className="text-left">Name</th>
            <th className="text-right">Time</th>
            <th className="text-center">Calories</th>
          </tr>
        </thead>
      </table>
      {preparing.map((preparingInfo, idx) => (
        <Cook
          preparingInfo={preparingInfo}
          idx={idx}
          key={preparingInfo.id}
        ></Cook>
      ))}
      <Total getValue={getValue} time={time} calories={calories}></Total>
    </div>
  );
};

CurrentCook.propTypes = {
  CurrentCook: PropTypes.func,
  preparing: PropTypes.array,
  getValue: PropTypes.bool,
  time: PropTypes.number,
  calories: PropTypes.number,
};

export default CurrentCook;
