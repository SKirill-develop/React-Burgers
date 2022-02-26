import PropTypes from "prop-types";
import { useContext } from "react";
import detailsStyles from "./ingredient-details.module.css";
import { DataContext } from "../../services/DataContext";

const IngredientDetails = ({ currentIngredientId }) => {
  const ingredients = useContext(DataContext);
  const ingredient = ingredients.filter((item) => item._id === currentIngredientId);
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
  currentIngredientId: PropTypes.string.isRequired,
};

export default IngredientDetails;
