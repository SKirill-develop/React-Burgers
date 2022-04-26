import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Home = () => {
  const isLoading = useSelector((state) => state.ingredients.isLoading);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DndProvider backend={HTML5Backend}>
            <div className={styles.app__container}>
              <BurgerIngredients />
              <BurgerConstructor />
            </div>
          </DndProvider>
        </>
      )}
    </>
  );
};
