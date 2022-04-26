import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import { useDispatch } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import { getIngredients } from "../../services/actions/ingredients";
import { Home } from '../../pages/home/home';
import { Login } from '../../pages/login/login';
import { Register } from '../../pages/register/register';
import { ForgotPassword } from '../../pages/resetPassword/resetPassword';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
    </Switch>
    </>
      );
};
export default App;
