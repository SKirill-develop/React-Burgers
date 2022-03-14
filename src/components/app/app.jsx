import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ingredients.isLoading);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppHeader />
          <DndProvider backend={HTML5Backend}>
            <div className={appStyles.app__container}>
              <BurgerIngredients />
              <BurgerConstructor />
            </div>
          </DndProvider>
        </>
      )}
    </>
  );
};
export default App;
