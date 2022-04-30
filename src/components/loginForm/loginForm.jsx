import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '../../services/actions/auth';
import styles from './loginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitLoginForm = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmitLoginForm} className={styles.loginForm}>
      <h1 className={`text text_type_main-medium ${styles.loginForm__header}`}>Вход</h1>
      <div className="p-3" />
      <Input type="email" placeholder="Email" name="email" value={email} onChange={handleChangeEmail} />
      <div className="p-3" />
      <PasswordInput name="password" value={password} onChange={handleChangePassword} autocomplete="on" />
      <div className="p-3" />
      <Button type="primary" size="medium">
        Войти
      </Button>
      <div className="p-10" />
      <div className={styles.loginForm__caption}>
        <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
        <Link className={`text text_type_main-default ${styles.loginForm__link}`} to="/register">Зарегистрироваться</Link>
      </div>
      <div className="p-2" />
      <div className={styles.loginForm__caption}>
        <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
        <Link className={`text text_type_main-default ${styles.loginForm__link}`} to="/forgot-password">Восстановить пароль</Link>
      </div>
    </form>
  );
};