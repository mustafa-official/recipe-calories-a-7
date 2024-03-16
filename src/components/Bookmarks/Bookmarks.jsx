import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ saveBookmark }) => {
  return (
    <div className="border-[2px] rounded-xl p-5">
      <h2 className="text-center text-[#282828] text-2xl font-semibold">
        Want to cook: {saveBookmark.length}
      </h2>
      <hr className="my-5" />
      <table>
        <thead className="text-[#878787] font-medium">
          <tr>
            <th className="pl-10">Name</th>
            <th className="pl-10">Time</th>
            <th className="pl-10">Calories</th>
          </tr>
        </thead>
      </table>

      {saveBookmark.map((data, idx) => (
        <Bookmark key={data.id} index={idx} cartInfo={data}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  Bookmarks: PropTypes.func,
  saveBookmark: PropTypes.array,
};

export default Bookmarks;
