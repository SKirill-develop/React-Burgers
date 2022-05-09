import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { LocationState } from "../../services/types/index"


export const ProtectedRoute = ({ path, component }: RouteProps) => {
  const isAuth = useSelector((store) => store.isAuth);
  const location = useLocation<LocationState>();

  if (!isAuth) {
    return (
      <Route path={path}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }

  return <Route path={path} component={component} />;
};
