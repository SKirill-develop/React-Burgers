import { useContext, useMemo, useCallback, useState } from "react";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { url } from "../../utils/constants";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  DragIcon,
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { DataContext } from "../../services/DataContext";

const BurgerConstructor = () => {
  const ingredients = useContext(DataContext);
  const selectedBun = useMemo(() => {
    return ingredients.find((el) => el.type === "bun");
  }, [ingredients]);
  const [number, setNumber] = useState("");
  const [order, setOrder] = useState(false);

  const main = useMemo(() => {
    return ingredients.filter((el) => el.type !== "bun");
  }, [ingredients]);

  const totalPrice = useMemo(() => {
    const mainPrice = main.reduce((sum, el) => sum + el.price, 0);
    const bunPrice = selectedBun.price;
    const total = mainPrice + bunPrice * 2;
    return total;
  }, [main, selectedBun]);

  const ingredientsIDs = useMemo(() => {
    return [...main.map((el) => el._id), selectedBun._id];
  }, [main, selectedBun]);

  const getOrderNumber = useCallback(() => {
    fetch(`${url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsIDs,
      }),
    })
      .then((res) => res.json())
      .then((res) => setNumber(res.order.number))
      .catch((err) => console.log(err));
    setOrder(true);
  }, [ingredientsIDs]);

  return (
    <div className="mt-25">
      <div className="m-4">
        <div className="ml-20">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${selectedBun.name} (верх)`}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        </div>

        <ul className={burgerConstructorStyle.elements}>
          {ingredients.map((item, index) => {
            if (item.type === "bun") {
              return null;
            }
            return (
              <li key={index} className="m-4">
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            );
          })}
        </ul>
        <div className="ml-20">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${selectedBun.name} (низ)`}
            price={selectedBun.price}
            thumbnail={selectedBun.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyle.info + " mt-10 mr-4"}>
        <div className={burgerConstructorStyle.price + " mr-10"}>
          <p className="text text_type_digits-medium m-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div>
          <Button type="primary" size="medium" onClick={getOrderNumber}>
            Оформить заказ
          </Button>
          {order && (
            <Modal closed={() => setOrder(false)}>
              <OrderDetails orderNumber={String(number)} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
