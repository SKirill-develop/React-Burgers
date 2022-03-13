import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const ingredient = useSelector((state) => state.ingredientsDetailModal.data);

  return (
    <div className={styles.content + " pb-15 pr-10 pl-10"} key={ingredient._id}>
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={styles.image + " mb-4"}
      />
      <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
      <ul className={styles.list}>
        <li
          className={
            styles.text + " text text_type_main-default text_color_inactive"
          }
        >
          Калории,ккал <span>{ingredient.calories}</span>
        </li>
        <li
          className={
            styles.text + " text text_type_main-default text_color_inactive"
          }
        >
          Белки, г <span>{ingredient.proteins}</span>
        </li>
        <li
          className={
            styles.text + " text text_type_main-default text_color_inactive"
          }
        >
          Жиры, г <span>{ingredient.fat}</span>
        </li>
        <li
          className={
            styles.text + " text text_type_main-default text_color_inactive"
          }
        >
          Углеводы, г <span>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
