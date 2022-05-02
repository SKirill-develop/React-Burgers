import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import { getIngredients } from "../../services/actions/ingredients";
import { Home } from "../../pages/home/home";
import { Login } from "../../pages/login/login";
import { Register } from "../../pages/register/register";
import { Feed } from "../../pages/feed/feed";
import { OrderDetails } from "../../pages/orderDetails/orderDetails.js";
import { Page404 } from "../../pages/page404/page404";
import { ForgotPassword } from "../../pages/forgotPassword/forgotPassword";
import { ResetPassword } from "../../pages/resetPassword/resetPassword";
import { Profile } from "../../pages/profile/profile";
import { ProtectedRoute } from "../protectedRoute/protectedRoute";
import { getUser } from "../../services/actions/auth";
import { FeedOrderDetails } from "../feedOrderDetails/feedOrderDetails";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import styles from './app.module.css';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/ingredients/:id">
          <div className={styles.app__ingredientDetails}>
            <IngredientDetails />
          </div>
        </Route>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/feed/:id" component={OrderDetails} />
        <ProtectedRoute path="/profile/orders/:id" component={OrderDetails} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/profile/orders" component={Profile} />
        <Route component={Page404} />
      </Switch>
      {background && (
        <>
          <Route exact path="/ingredients/:id">
            <Modal title="Детали ингредиента">
              <IngredientDetails />
            </Modal>
          </Route>
          <Route exact path="/feed/:id">
            <Modal>
              <FeedOrderDetails />
            </Modal>
          </Route>
          <Route exact path="/profile/orders/:id">
            <Modal>
              <FeedOrderDetails />
            </Modal>
          </Route>
        </>
      )}
    </>
  );
};
export default App;
