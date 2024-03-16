import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import CurrentCook from "../CurrentCook/CurrentCook";

const Bookmarks = ({ saveBookmark, handlePreparing, preparing,getVisibleBtn,getValue,time,calories }) => {
  return (
    <div className="border-[2px] rounded-xl p-5">
      <h2 className="text-center text-[#282828] text-2xl font-semibold">
        Want to cook: {saveBookmark.length}
      </h2>
      <hr className="my-5" />
      <table>
        <thead className="text-[#878787] font-medium">
          <tr>
            <th className="lg:pl-10 pl-4">Name</th>
            <th className="lg:pl-10 pl-4">Time</th>
            <th className="lg:pl-10 pl-4">Calories</th>
          </tr>
        </thead>
      </table>

      {saveBookmark.map((data, idx) => (
        <Bookmark
          handlePreparing={handlePreparing}
          key={data.id}
          index={idx}
          cartInfo={data}
          getVisibleBtn={getVisibleBtn}
          
        ></Bookmark>
      ))}
      <CurrentCook preparing={preparing} getValue={getValue} time={time} calories={calories}></CurrentCook>
    </div>
  );
};

Bookmarks.propTypes = {
  Bookmarks: PropTypes.func,
  saveBookmark: PropTypes.array,
  handlePreparing: PropTypes.func,
  preparing: PropTypes.array,
  getVisibleBtn: PropTypes.func,
  getValue: PropTypes.bool,
  time: PropTypes.number,
  calories: PropTypes.number,
};

export default Bookmarks;
