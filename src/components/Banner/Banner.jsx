import PropTypes from "prop-types";
import banner from "../../images/banner.jpeg";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="w-full bg-center bg-cover rounded-2xl h-[600px] mt-8 flex flex-col justify-center items-center"
    >
      <div className="px-6 lg:px-24 flex flex-col gap-8">
        <p className="text-white lg:text-5xl text-2xl font-bold text-center">
          Discover an exceptional cooking class tailored for you!
        </p>
        <p className="text-white text-[18px] lg:text-xl text-center">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex lg:flex-row flex-col gap-5 justify-center">
          <button className="bg-[#0BE58A] text-black px-4 py-2 rounded-3xl border border-[#0BE58A] hover:bg-transparent hover:text-white">
            Explore Now
          </button>
          <button className="hover:bg-[#0BE58A] hover:text-black px-4 py-2 rounded-3xl border border-white hover:border-[#0BE58A] bg-transparent text-white">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  Banner: PropTypes.func,
};

export default Banner;
