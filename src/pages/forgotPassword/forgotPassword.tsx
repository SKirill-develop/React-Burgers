import { ForgotPasswordForm } from '../../components/forgotPasswordForm/forgotPasswordForm';
import { useHistory } from "react-router-dom";
import { useSelector } from "../../services/hooks";

export const ForgotPassword = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const history = useHistory();

  if (isAuth) {
    history.goBack();
  }

  return (
    <ForgotPasswordForm />
  );
};