import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './resetPasswordForm.module.css';

export const ResetPasswordForm = () => {

  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const [isFormValid, setFormValid] = useState(false);

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeToken = (event) => {
    setToken(event.target.value);
  };

  const handleChangeForm = (event) => {
    const isValid = event.target.checkValidity();
    setFormValid(isValid);
  };


  return (
    <form onChange={handleChangeForm} className={styles.resetPasswordForm}>
      <h1 className={`text text_type_main-medium ${styles.resetPasswordForm__header}`}>Восстановление пароля</h1>
      <div className="p-3" />
      <PasswordInput name="password" value={password} onChange={handleChangePassword} />
      <div className="p-3" />
      <Input type="text" placeholder="Введите код из письма" name="code" value={token} onChange={handleChangeToken} />
      <div className="p-3" />
      <Button disabled={!isFormValid}  type="primary" size="medium">
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