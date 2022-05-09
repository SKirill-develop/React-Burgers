import { LoginForm } from "../../components/loginForm/loginForm";
import { Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { LocationState } from "../../services/types";

export const Login = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const location = useLocation<LocationState>();

  if (isAuth) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Redirect to={from} />;
  }

  return <LoginForm />;
};
