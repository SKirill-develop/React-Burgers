import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { DataContext } from "../../services/DataContext";
import { url } from "../../utils/constants"

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIngredientId, setCurrentIngredientId] = useState("");

  const openIngredientModal = (id) => setCurrentIngredientId(id);
  const closeIngredientModal = () => setCurrentIngredientId("");


  const checkRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
  };

  useEffect(() => {
    fetch(`${url}/ingredients`)
      .then(checkRes)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <AppHeader />
          <DataContext.Provider value={data}>
            <div className={appStyles.app__container}>
              <BurgerIngredients action={openIngredientModal} />
              <BurgerConstructor/>
            </div>
          {currentIngredientId && ( 
            <Modal onClose={closeIngredientModal} title="Детали ингредиента">
              <IngredientDetails
                currentIngredientId={currentIngredientId}
              />
            </Modal>
          )}
            </DataContext.Provider>
          </>
      )}
    </>
  );
};
export default App;
