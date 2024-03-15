import PropTypes from "prop-types";
import banner from "../../images/banner.jpeg";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="w-full bg-center bg-cover rounded-2xl h-[600px] mt-8"
    ></div>
  );
};

Banner.propTypes = {
    Banner: PropTypes.func,
};

export default Banner;
