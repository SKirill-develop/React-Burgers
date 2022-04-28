import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ path, component }) => {
  const isAuth = useSelector((store) => store.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Route path={path}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }

  return <Route path={path} component={component} />;
};
