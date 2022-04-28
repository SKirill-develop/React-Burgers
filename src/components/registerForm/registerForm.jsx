import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../services/actions/auth';
import styles from './RegisterForm.module.css';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleRegisterUser = (event) => {
    event.preventDefault();
    dispatch(register(email, password, name));
  };

  return (
    <form onSubmit={handleRegisterUser} className={styles.registerForm}>
      <h1 className={`text text_type_main-medium ${styles.registerForm__header}`}>Регистрация</h1>
      <div className="p-3" />
      <Input type="text" placeholder="Имя" name="name" value={name} onChange={handleChangeName} />
      <div className="p-3" />
      <Input type="email" placeholder="Email" name="email" value={email} onChange={handleChangeEmail} />
      <div className="p-3" />
      <PasswordInput name="password" value={password} onChange={handleChangePassword} autocomplete="on" />
      <div className="p-3" />
      <Button type="primary" size="medium" >
        Зарегистрироваться
      </Button>
      <div className="p-10" />
      <div className={styles.registerForm__caption}>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
        <Link className={`text text_type_main-default ${styles.registerForm__link}`} to="/login">Войти</Link>
      </div>
    </form>
  );
};