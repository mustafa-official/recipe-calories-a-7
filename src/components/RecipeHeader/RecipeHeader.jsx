import PropTypes from "prop-types";

const RecipeHeader = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center lg:mt-20 mt-10">
      <h1 className="text-[#150B2B] lg:text-4xl text-2xl font-semibold text-center">
        Our Recipes
      </h1>
      <p className="text-[#150B2B99] text-[16px] text-center max-w-[800px]">
      Food can also be classified on the basis of Nutrients that they provide: Carbohydrate rich foods: Wheat, rice, potato, sugar etc. Protein rich foods: Egg, milk, meat, fish, pulses etc.
      </p>
    </div>
  );
};

RecipeHeader.propTypes = {
  RecipeHeader: PropTypes.func,
};

export default RecipeHeader;
