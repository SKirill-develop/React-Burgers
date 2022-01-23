import React from "react";
import IngredientList from "../ingridient-list/ingredient-list";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState("bun");

  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");

  return (
    <div className={IngredientStyles.ingredients}>
      <p className={IngredientStyles.title + " text text_type_main-large"}>
        Соберите бургер
      </p>
      <nav className={IngredientStyles.ingredients__tabs}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>

      {current === "bun" && <IngredientList data={bun} title="Булки" />}
      {current === "sauce" && <IngredientList data={sauce} title="Соусы" />}
      {current === "main" && <IngredientList data={main} title="Начинки" />}
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default BurgerIngredients;
