import PropTypes from "prop-types";
import detailsStyles from "./ingredient-details.module.css";

const IngredientDetails = ({ currentsIngredients, data }) => {
  const ingredient = data.filter((item) => item._id === currentsIngredients);
  return (
    <>
      {ingredient.map((item) => {
        return (
          <div
            className={detailsStyles.content + " pb-15 pr-10 pl-10"}
            key={item._id}
          >
            <img
              src={item.image}
              alt={item.name}
              className={detailsStyles.image + " mb-4"}
            />
            <p className="text text_type_main-medium mb-8">{item.name}</p>
            <ul className={detailsStyles.list}>
              <li
                className={
                  detailsStyles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Калории,ккал <span>{item.calories}</span>
              </li>
              <li
                className={
                  detailsStyles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Белки, г <span>{item.proteins}</span>
              </li>
              <li
                className={
                  detailsStyles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Жиры, г <span>{item.fat}</span>
              </li>
              <li
                className={
                  detailsStyles.text +
                  " text text_type_main-default text_color_inactive"
                }
              >
                Углеводы, г <span>{item.carbohydrates}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  currentsIngredients: PropTypes.string.isRequired,
};

export default IngredientDetails;
