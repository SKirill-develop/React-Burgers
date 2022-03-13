import styles from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { RESET_INGREDIENT_MODAL, SET_INGREDIENT_MODAL } from "../../services/actions/ingredient-detail-modal";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";

export const BurgerIngredient = ({ingredient, count}, ref) => {
  const dispatch = useDispatch();
  const ingredientsDetails = useSelector((state) => state.ingredientsDetailModal.data);

  const closeIngredientModal = () => {
    dispatch({ type: RESET_INGREDIENT_MODAL}
    )
  }

  const [, drag] = useDrag(() => ({
    type: "NEW_INGREDIENT",
    item: ingredient,
  }));

  return (
    <>
      <li
      className={styles.ingredients__item}
      ref={drag}
      onClick={() => dispatch({
        type: SET_INGREDIENT_MODAL,
        ingredient: ingredient,
      })}
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
      {ingredientsDetails && (
        <Modal onClose={closeIngredientModal} title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}
    </>
  )
}

