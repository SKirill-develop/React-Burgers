import burgerConstructorStyle from "./burger-constructor.module.css";

import {
  DragIcon,
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const burgerConstructor = ({ data }) => {
  return (
    <div className="mt-25">
      <div className="m-4">
        <div className="ml-20">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
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
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyle.info + " mt-10 mr-4"}>
        <div className={burgerConstructorStyle.price + " mr-10"}>
          <p className="text text_type_digits-medium m-2">10000</p>
          <CurrencyIcon type="primary" />
        </div>
        <div>
          <Button type="primary" size="medium">
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default burgerConstructor;
