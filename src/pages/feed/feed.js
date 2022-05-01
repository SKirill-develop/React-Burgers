import { useEffect, useMemo } from "react";
import { Loader } from "../../components/loader/loader";
import { useSelector, useDispatch } from "react-redux";
import { OrdersList } from "../../components/ordersList/ordersList";
import { wsClose, wsConnectionStart } from "../../services/actions/webSockets";
import styles from "./feed.module.css";

export const Feed = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.feedOrders?.orders);
  const isLoading = useSelector((store) => store.isLoading);
  const totalOrders = useSelector((store) => store.feedOrders?.total);
  const todayOrders = useSelector((store) => store.feedOrders?.totalToday);

  const doneOrders = useMemo(
    () => orders && orders.filter((order) => order.status === "done"),
    [orders]
  );
  const pendingOrders = useMemo(
    () => orders && orders.filter((order) => order.status === "pending"),
    [orders]
  );

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsClose());
    };
  }, []);

  return (
    <div className={styles.feed}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text text_type_main-large">Лента заказов</h1>
          <div className={styles.feed__container}>
            <OrdersList />
            <div className={styles.feed__ordersInfo}>
              <div className={styles.feed__ordersStatus}>
                <div>
                  <p className="text text_type_main-medium mb-6">Готовы:</p>
                  <ul className={styles.feed__ordersList}>
                    {doneOrders &&
                      doneOrders.slice(0, 10).map((order) => (
                        <li key={order._id}>
                          <p
                            className={`text text_type_digits-default ${styles.feed__order_done}`}
                          >
                            {order.number}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <p className="text text_type_main-medium mb-6">В работе:</p>
                  <ul className={styles.feed__ordersList}>
                    {pendingOrders &&
                      pendingOrders.map((order) => (
                        <li key={order._id}>
                          <p className="text text_type_digits-default">
                            {order.number}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className={styles.feed__ordersTotal}>
                <p className="text text_type_main-medium">
                  Выполнено за все время:
                </p>
                <p className="text text_type_digits-large">{totalOrders}</p>
              </div>
              <div className={styles.feed__ordersToday}>
                <p className="text text_type_main-medium">
                  Выполнено за сегодня:
                </p>
                <p className="text text_type_digits-large">{todayOrders}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
