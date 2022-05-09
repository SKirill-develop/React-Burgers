import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState, useCallback, ChangeEvent, SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setNewPassword } from '../../services/actions/auth';

import styles from './resetPasswordForm.module.css';

export const ResetPasswordForm = () => {
  const history = useHistory();

  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const [isFormValid, setFormValid] = useState<boolean>(false);

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const handleChangeForm = (event: ChangeEvent<HTMLFormElement>) => {
    const isValid = event.target.checkValidity();
    setFormValid(isValid);
  };

  const handleSetNewPassword = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();

      setNewPassword(password, token);
      setPassword('');
      setToken('');
      setFormValid(false);
      history.push('/login');
    },
    [password, token, history],
  );

  return (
    <form onChange={handleChangeForm} className={styles.resetPasswordForm}>
      <h1 className={`text text_type_main-medium ${styles.resetPasswordForm__header}`}>Восстановление пароля</h1>
      <div className="p-3" />
      <PasswordInput name="password" value={password} onChange={handleChangePassword} />
      <div className="p-3" />
      <Input type="text" placeholder="Введите код из письма" name="code" value={token} onChange={handleChangeToken} />
      <div className="p-3" />
      <Button disabled={!isFormValid} onClick={handleSetNewPassword} type="primary" size="medium">
        Сохранить
      </Button>
      <div className="p-10" />
      <div className={styles.resetPasswordForm__caption}>
        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
        <Link className={`text text_type_main-default ${styles.resetPasswordForm__link}`} to="/login">Войти</Link>
      </div>
    </form>
  );
};