import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "../burger-ingredients/burger-ingredients.module.css";

const Ingredient = ({ data, title }) => {
  return (
    <>
      <p
        className={
          IngredientStyles.title + " text text_type_main-medium mt-10 mb-6"
        }
      >
        {title}
      </p>

      <ul className={IngredientStyles.ingredients__list}>
        {data.map((item) => (
          <li key={item._id} className={IngredientStyles.ingredients__item}>
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

export default Ingredient;
