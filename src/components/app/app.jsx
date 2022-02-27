import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.ingredientsReducer.ingredientsSuccess
  );
  const [currentIngredientId, setCurrentIngredientId] = useState("");

  const openIngredientModal = (id) => setCurrentIngredientId(id);
  const closeIngredientModal = () => setCurrentIngredientId("");

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppHeader />
          <div className={appStyles.app__container}>
            <BurgerIngredients action={openIngredientModal} />
            <BurgerConstructor />
          </div>
          {currentIngredientId && (
            <Modal onClose={closeIngredientModal} title="Детали ингредиента">
              <IngredientDetails currentIngredientId={currentIngredientId} />
            </Modal>
          )}
        </>
      )}
    </>
  );
};
export default App;
