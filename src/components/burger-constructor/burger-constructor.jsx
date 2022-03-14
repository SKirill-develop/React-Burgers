import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  addToConstructor,
  NEW_INGREDIENT,
  CONSTRUCTOR_RESET,
} from "../../services/actions/constructor";
import { BurgerConstructorElement } from "../burger-constructor-element/burger-constructor-element";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { RESET_ORDER, orderBurger } from "../../services/actions/order";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const constructorItems = useSelector((state) => state.burgerConstructor);
  const orderRequest = useSelector((state) => state.order.isLoading);
  const orderModalData = useSelector((state) => state.order.data);

  const [, drop] = useDrop(() => ({
    accept: NEW_INGREDIENT,
    drop: (item) => dispatch(addToConstructor(item)),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      dragItem: monitor.getItem(),
      isOver: monitor.isOver(),
    }),
  }));

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) {
      return;
    }

    dispatch(
      orderBurger([
        constructorItems.bun._id,
        ...constructorItems.ingredients.map((el) => el._id),
        constructorItems.bun._id,
      ])
    );
  };

  const closeOrderModal = () => {
    dispatch({ type: RESET_ORDER });
    dispatch({ type: CONSTRUCTOR_RESET });
  };
  const price = useMemo(() => {
    return (
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce((sum, el) => sum + el.price, 0)
    );
  }, [constructorItems]);

  return (
    <section className="mt-25" ref={drop}>
      <div className="m-4">
        {constructorItems.bun ? (
          <div className="ml-20">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${constructorItems.bun.name} (верх)`}
              price={constructorItems.bun.price}
              thumbnail={constructorItems.bun.image}
            />
          </div>
        ) : (
          <p className="text text_type_main-medium">Выберите булку</p>
        )}
        <ul className={style.elements}>
          {constructorItems.ingredients.length > 0 ? (
            constructorItems.ingredients.map((item, index) => {
              return (
                <BurgerConstructorElement
                  ingredient={item}
                  index={index}
                  key={item.id}
                />
              );
            })
          ) : (
            <p className="text text_type_main-medium">Выберите начинку</p>
          )}
        </ul>

        {constructorItems.bun ? (
          <div className="ml-20">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${constructorItems.bun.name} (низ)`}
              price={constructorItems.bun.price}
              thumbnail={constructorItems.bun.image}
            />
          </div>
        ) : (
          <p className="text text_type_main-medium">Выберите булку</p>
        )}
      </div>
      <div className={style.info + " mt-10 mr-4"}>
        <div className={style.price + " mr-10"}>
          <p className="text text_type_digits-medium m-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div>
          <Button type="primary" size="medium" onClick={onOrderClick}>
            Оформить заказ
          </Button>
          {orderModalData && (
            <Modal onClose={closeOrderModal}>
              <OrderDetails orderNumber={orderModalData.order.number} />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default BurgerConstructor;
