import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";

const App = () => {
  const [data, setData] = useState([]);
  const url = "https://norma.nomoreparties.space/api";

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
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AppHeader />
      <div className={appStyles.app__container}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} /> 
      </div>
    </div>
  );
};
export default App;
