import { forwardRef, useMemo }   from "react";
import { useSelector } from "react-redux";

import styles from "./ingredient-list.module.css";
import { BurgerIngredient } from "../burger-ingredient/burger-ingredient"
import PropTypes from "prop-types";
import ingredientPropTypes from "../../utils/interfaces";

const IngredientList = forwardRef(({ data, title, action, id }, ref) => {

  const burgerConstructor = useSelector(state => state.burgerConstructor)

  const ingredientCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;
    const counters = {};
    ingredients.forEach(ingredient => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [burgerConstructor])

  return (
    <div id={id} >
      <p className={styles.title + " text text_type_main-medium mt-10 mb-6"}>
        {title}
      </p>
      <ul className={styles.ingredient__list} ref={ref}>
        {data.map((item) => (
          <BurgerIngredient 
          key={item._id}
          ingredient={item} 
          action={action} 
          count={ingredientCounters[item._id]}
          />
        ))}
      </ul>
    </div>
  );
});

IngredientList.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  title: PropTypes.string,
  action: PropTypes.func.isRequired,
};

export default IngredientList;
