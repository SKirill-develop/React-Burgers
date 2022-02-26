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
  const [currentsIngredients, setCurrentsIngredients] = useState("");

  const openIngredientModal = (id) => setCurrentsIngredients(id);
  const closeIngredientModal = () => setCurrentsIngredients("");


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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DataContext.Provider value={data}>
          <AppHeader />
          <div className={appStyles.app__container}>
            <BurgerIngredients data={data} action={openIngredientModal} />

            <BurgerConstructor/>
          </div>
          {currentsIngredients && (
            <Modal closed={closeIngredientModal} title={"Детали ингредиента"}>
              <IngredientDetails
                currentsIngredients={currentsIngredients}
                data={data}
              />
            </Modal>
          )}
        </DataContext.Provider>
      )}
    </div>
  );
};
export default App;
