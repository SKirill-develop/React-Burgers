import { useSelector } from "react-redux";
import { OrderCard } from '../OrderCard/OrderCard';
import styles from './ordersList.module.css';

export const OrdersList = ({ placeShow }) => {
  const orders = useSelector((store) => store.feedOrders?.orders);
  const ordersToRender = placeShow === 'profile' ? [...orders].reverse() : orders;

  return (
    <ul className={styles.ordersList}>
      {ordersToRender && ordersToRender.map((order) => (
        <li key={order._id}>
          <OrderCard showStatus orderData={order} />
        </li>
      ))}
    </ul>
  );
};