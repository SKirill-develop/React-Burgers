import { RegisterForm } from '../../components/registerForm/registerForm';
import { useHistory } from "react-router-dom";
import { useSelector } from "../../services/hooks";

export const Register = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const history = useHistory();

  if (isAuth) {
    history.goBack();
  }

  return (
    <RegisterForm />
  );
};