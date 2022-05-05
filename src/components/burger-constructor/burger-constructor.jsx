import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import style from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { addToConstructor } from "../../services/actions/constructor";
import {
  NEW_INGREDIENT,
  CONSTRUCTOR_RESET,
} from "../../services/constants/index";
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
  const history = useHistory();

  const isAuth = useSelector((store) => store.isAuth);
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
    if (isAuth) {
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
    } else {
      history.push('/login');
    }
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
    <section className={style.contain} ref={drop}>
    {
    constructorItems.bun || constructorItems.ingredients.length > 0
    ?
      <div className="m-4">
        {
          constructorItems.bun &&
          <div className="ml-20">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${constructorItems.bun.name} (верх)`}
              price={constructorItems.bun.price}
              thumbnail={constructorItems.bun.image}
            />
          </div>
        }

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
            <div className={`${style.addMain} text text_type_main-medium text_color_inactive`}>Перетащите сюда начинку</div>
          )}
        </ul>

        {constructorItems.bun &&
          <div className="ml-20">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${constructorItems.bun.name} (низ)`}
              price={constructorItems.bun.price}
              thumbnail={constructorItems.bun.image}
            />
          </div>
        }
      </div>
      :
          <div className={`${style.add} text text_type_main-medium text_color_inactive`}>Перетащите сюда булку</div>
    }
{
  (constructorItems.bun && constructorItems.ingredients.length > 0) &&

      <div className={style.info + " mt-10 mr-4"}>
        <div className={style.price + " mr-10"}>
          <p className="text text_type_digits-medium m-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div>
          <Button type="primary" size="medium" onClick={onOrderClick}>
            Оформить заказ
          </Button>
        </div>
        </div>
      }
      {orderModalData && (
            <Modal onClose={closeOrderModal}>
              <OrderDetails orderNumber={orderModalData.order.number} />
            </Modal>
          )}
    </section>
  );
};

export default BurgerConstructor;
