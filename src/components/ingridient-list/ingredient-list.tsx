import { forwardRef, useMemo } from "react";
import { useSelector } from "../../services/hooks";
import styles from "./ingredient-list.module.css";
import { BurgerIngredient } from "../burger-ingredient/burger-ingredient";
import { IIngredientListProps, TIngredientType } from '../../services/types/index'

const IngredientList = forwardRef<HTMLUListElement, IIngredientListProps>(({ data, title, id }, ref) => {
  const burgerConstructor = useSelector((state) => state.burgerConstructor);

  const ingredientCounters = useMemo(() => {
    const { bun, ingredients } = burgerConstructor;

  //  const counters: {[key: string]: number } = [];
    const counters: any = [];

    ingredients.forEach((ingredient: TIngredientType) => {
      if (!counters[ingredient._id]) counters[ingredient._id] = 0;
      counters[ingredient._id]++;
    });
    if (bun) counters[bun._id] = 2;
    return counters;
  }, [burgerConstructor]);

  return (
    <div id={id}>
      <p className={styles.title + " text text_type_main-medium mt-10 mb-6"}>
        {title}
      </p>
      <ul className={styles.ingredient__list} ref={ref}>
        {data.map((item) => (
          <BurgerIngredient
            key={item._id}
            ingredient={item}
            count={ingredientCounters[item._id]}
          />
        ))}
      </ul>
    </div>
  );
});

export default IngredientList;
