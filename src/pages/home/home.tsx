import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { Loader } from "../../components/loader/loader";
import { useSelector } from "../../services/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./home.module.css";

export const Home = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
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
