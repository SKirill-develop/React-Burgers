import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

const App = () => {
  const [data, setData] = useState([]);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [currentsIngredients, setCurrentsIngredients] = useState("");
  const url = "https://norma.nomoreparties.space/api";

  const openIngredientModal = (id) => setCurrentsIngredients(id);
  const closeIngredientModal = () => setCurrentsIngredients("");
  const openModalOrder = () => setShowModalDetails(true);
  const closeModalOrder = () => setShowModalDetails(false);

  const checkRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status + " - " + res.statusText}`);
  };

  useEffect(() => {
    fetch(`${url}/ingredients`)
      .then(checkRes)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AppHeader />
      <div className={appStyles.app__container}>
        <BurgerIngredients data={data} action={openIngredientModal} />
        <BurgerConstructor data={data} action={openModalOrder} />
      </div>
      {currentsIngredients && (
        <Modal closed={closeIngredientModal} title={"Детали ингредиента"}>
          <IngredientDetails
            currentsIngredients={currentsIngredients}
            data={data}
          />
        </Modal>
      )}
      {showModalDetails && (
        <Modal closed={closeModalOrder}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
export default App;
