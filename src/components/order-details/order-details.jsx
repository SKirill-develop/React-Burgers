import orderStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import PropTypes from 'prop-types';

const OrderDetails = ({orderNumber}) => {
  return (
    <div className={orderStyles.container + " pt-15 pr-25 pl-25 pb-30"}>
      <p className={orderStyles.order + " text text_type_digits-large mb-8"}>
      {orderNumber}
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <span className={orderStyles.icon + " mb-15"}>
        <CheckMarkIcon type="primary" />
      </span>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};

export default OrderDetails;