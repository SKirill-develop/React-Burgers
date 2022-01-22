import React from "react";

import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState("bun");

  const bun = data.filter((el) => el.type === "bun");
  const sauce = data.filter((el) => el.type === "sauce");
  const main = data.filter((el) => el.type === "main");
  const a = <h2>sfs</h2>;
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
      <p
        className={
          IngredientStyles.title + " text text_type_main-medium mt-10 mb-6"
        }
      >
        {current === "bun" ? "Булки" : ""}
        {current === "sauce" ? "Соусы" : ""}
        {current === "main" ? "Начинки" : ""}
      </p>
      <ul className={IngredientStyles.ingredients__list}>
        {current === "bun" &&
          bun.map((item) => (
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
        {current === "sauce" &&
          sauce.map((item) => (
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
        {current === "main" &&
          main.map((item) => (
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
    </div>
  );
};

export default BurgerIngredients;
