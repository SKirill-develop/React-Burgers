import { useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import IngredientList from "../ingridient-list/ingredient-list";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientStyles from "./burger-ingredients.module.css";
import { useSelector } from "../../services/hooks";
import { TIngredientType } from '../../services/types/index'

const BurgerIngredients = () => {
  const data = useSelector((state) => state.ingredients);
  const [currentTab, setCurrentTab] = useState("buns");

  const bun = useMemo(() => data.filter((el: TIngredientType) => el.type === "bun"), [data]);

  const sauce = useMemo(() => data.filter((el: TIngredientType) => el.type === "sauce"), [data]);

  const main = useMemo(() => data.filter((el: TIngredientType) => el.type === "main"), [data]);

  const [bunsRef, inViewBuns] = useInView({
    threshold: 0,
  });

  const [saucesRef, inViewSauces] = useInView({
    threshold: 0,
  });

  const [mainsRef, inViewFilling] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inViewBuns) {
      setCurrentTab("buns");
    } else if (inViewSauces) {
      setCurrentTab("sauces");
    } else if (inViewFilling) {
      setCurrentTab("mains");
    }
  }, [inViewBuns, inViewSauces, inViewFilling]);

  const onTabClick = (tab: string) => {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={IngredientStyles.ingredients}>
      <p className={IngredientStyles.title + " text text_type_main-large"}>
        Соберите бургер
      </p>
      <nav className={IngredientStyles.ingredients__tabs}>
        <Tab value="buns" active={currentTab === "buns"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={currentTab === "sauces"}
          onClick={onTabClick}
        >
          Соусы
        </Tab>
        <Tab value="mains" active={currentTab === "mains"} onClick={onTabClick}>
          Начинки
        </Tab>
      </nav>
      <div className={IngredientStyles.ingredients__list}>
        <IngredientList id="buns" data={bun} title="Булки" ref={bunsRef} />
        <IngredientList
          id="sauces"
          data={sauce}
          title="Соусы"
          ref={saucesRef}
        />
        <IngredientList id="mains" data={main} title="Начинки" ref={mainsRef} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
