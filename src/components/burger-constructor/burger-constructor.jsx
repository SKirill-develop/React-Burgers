import burgerConstructorStyle from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import img from "@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png";
import {
  DragIcon,
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ data, action }) => {
  return (
    <div className="mt-25">
      <div className="m-4">
        <div className="ml-20">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={"Краторная булка N-200i (верх)"}
            price={1255}
            thumbnail={img}
          />
        </div>

        <ul className={burgerConstructorStyle.elements}>
          {data.map((item, index) => {
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
            text={"Краторная булка N-200i (низ)"}
            price={1255}
            thumbnail={img}
          />
        </div>
      </div>
      <div className={burgerConstructorStyle.info + " mt-10 mr-4"}>
        <div className={burgerConstructorStyle.price + " mr-10"}>
          <p className="text text_type_digits-medium m-2">10000</p>
          <CurrencyIcon type="primary" />
        </div>
        <div>
          <Button type="primary" size="medium" onClick={action}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default BurgerConstructor;
