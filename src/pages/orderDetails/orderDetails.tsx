import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "../../services/hooks";
import {
  wsClose,
  wsConnectionStart,
  wsCustomUrlConnectionStart,
} from "../../services/actions/webSockets";
import { FeedOrderDetails } from "../../components/feedOrderDetails/feedOrderDetails";
import styles from "./orderDetails.module.css";
import { LocationState } from "../../services/types/index"


export const OrderDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation<LocationState>();

  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      const token = localStorage.getItem("accessToken")?.replace("Bearer ", "");
      dispatch(
        wsCustomUrlConnectionStart(
          `wss://norma.nomoreparties.space/orders?token=${token}`
        )
      );
    } else {
      dispatch(wsConnectionStart());
    }
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
    <div className={styles.orderDetails}>
      <FeedOrderDetails />
    </div>
  );
};
