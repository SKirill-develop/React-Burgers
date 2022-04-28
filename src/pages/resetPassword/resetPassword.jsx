import { ResetPasswordForm } from '../../components/resetPasswordForm/resetPasswordForm';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const ResetPassword = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const history = useHistory();

  if (isAuth) {
    history.goBack();
  }

  return (
    <ResetPasswordForm />
  );
};