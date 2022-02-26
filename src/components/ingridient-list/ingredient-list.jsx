import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "../burger-ingredients/burger-ingredients.module.css";
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/interfaces";

const IngredientList = ({ data, title, action }) => {
  return (
    <>
      <p
        className={
          IngredientStyles.title + " text text_type_main-medium mt-10 mb-6"
        }
      >
        {title}
      </p>
      <ul className={IngredientStyles.ingredient__list}>
        {data.map((item) => (
          <li
            key={item._id}
            className={IngredientStyles.ingredients__item}
            onClick={() => action(item._id)}
          >
            <img src={item.image} alt={item.name} />
            <div className={IngredientStyles.contain + " mt-2 mb-2"}>
              <p className="text text_type_digits-default pr-2">
                {item.price}{" "}
              </p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

IngredientList.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  title: PropTypes.string,
  action: PropTypes.func.isRequired,
};

export default IngredientList;
