import PropTypes from "prop-types";

const Total = ({ getValue, time, calories }) => {
  return (
    <div>
      <table
        className={!getValue ? "block w-full flex justify-evenly" : "hidden"}
      >
        <tbody>
          <tr>
            <td className="pr-4 lg:pr-8">Total Times = </td>
            <td className="mr-6">Total Calories =</td>
          </tr>
          <tr className="">
            <td className="mr-8">{time} min</td>
            <td className="mr-12">{calories} calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Total.propTypes = {
  Total: PropTypes.func,
  getValue: PropTypes.bool,
  time: PropTypes.number,
  calories: PropTypes.number,
};

export default Total;
