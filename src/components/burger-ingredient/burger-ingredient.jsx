import styles from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
export const BurgerIngredient = ({ingredient, action, count}, ref) => {

  const [, drag] = useDrag(() => ({
    type: "NEW_INGREDIENT",
    item: ingredient,
  }));

  return (
    <li
    className={styles.ingredients__item}
    ref={drag}
    onClick={() => action(ingredient._id)}
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
    </li>
  
  )
}

