import styles from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';
import { NEW_INGREDIENT } from "../../services/actions/constructor";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import ingredientPropTypes from "../../utils/interfaces";
import PropTypes from "prop-types";

export const BurgerIngredient = ({ingredient, count}, ref) => {
  const location = useLocation();

  const [, drag] = useDrag(() => ({
    type: NEW_INGREDIENT,
    item: ingredient,
  }));

  return (
    <>
      <li
      className={styles.ingredients__item}
      ref={drag}
      >
      <Link
      className={styles.ingredients__link}
        to={{
          pathname: `/ingredients/${ingredient._id}`,
          state: { background: location },
        }}
      >
      {count > 0 && <Counter count={count} size={"default"} />}
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={styles.contain + " mt-2 mb-2"}>
        <p className="text text_type_digits-default pr-2">
          {ingredient.price}{" "}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{ingredient.name}</p>
      </Link>
      </li>
    </>
  )
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropTypes,
  count: PropTypes.number,
};