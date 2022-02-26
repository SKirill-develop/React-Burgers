import  { useContext, useState}from "react";
import IngredientList from "../ingridient-list/ingredient-list";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { DataContext } from "../../services/DataContext";

const BurgerIngredients = ({ action }) => {
  const data = useContext(DataContext);
  const [current, setCurrent] = useState("bun");

  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");

  return (
    <div className={IngredientStyles.ingredients}>
      <p className={IngredientStyles.title + " text text_type_main-large"}>
        Соберите бургер
      </p>
      <nav className={IngredientStyles.ingredients__tabs}>
      <div>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        </div>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={IngredientStyles.ingredients__list}>
      <IngredientList data={bun} action={action} title="Булки" />
      <IngredientList data={sauce} action={action} title="Соусы" />
      <IngredientList data={main} action={action} title="Начинки" />
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  action: PropTypes.func.isRequired
};

export default BurgerIngredients;
