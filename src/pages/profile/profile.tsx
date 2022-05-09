import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";
import { EditProfileForm } from "../../components/editProfileForm/editProfileForm";
import { ProfileNav } from "../../components/profileNav/profileNav";
import { OrdersList } from "../../components/ordersList/ordersList";
import {
  wsClose,
  wsCustomUrlConnectionStart,
} from "../../services/actions/webSockets";
import styles from "./profile.module.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.feedOrders?.orders);

  useEffect(() => {
    const token = localStorage.getItem("accessToken")?.replace("Bearer ", "");
    dispatch(
      wsCustomUrlConnectionStart(
        `wss://norma.nomoreparties.space/orders?token=${token}`
      )
    );
    return () => {
      dispatch(wsClose());
    };
  }, []);

  return (
    <div className={styles.profile}>
      <ProfileNav />
      <Route exact path="/profile" component={EditProfileForm} />
      <Route exact path="/profile/orders">
        {orders?.length ? (
          <OrdersList placeShow="profile" />
        ) : (
          <h2 className="text text_type_main-large">Пока тут пусто</h2>
        )}
      </Route>
    </div>
  );
};
