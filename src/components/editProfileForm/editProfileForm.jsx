import {
  Button, EmailInput, Input, PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { getUser, updateUser } from '../../services/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import styles from './editProfileForm.module.css';

export const EditProfileForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => ({
    user: store.user,
  }));

  const [formValue, setFormValue] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
  });

  const checkFormEdited = () => {
    if (user) {
      const isNameEdited = formValue.name !== user.name;
      const isEmailEdited = formValue.email !== user.email;
      const isPasswordEdited = formValue.password !== '';

      return (isNameEdited || isEmailEdited || isPasswordEdited);
    }

    return false;
  };

  const resetForm = () => {
    setFormValue({
      name: user.name || '',
      email: user.email || '',
      password: '',
    });
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    user && setFormValue({
      name: user.name || '',
      email: user.email || '',
      password: '',
    });
  }, [user]);

  const handleChangeInput = (event) => {
    setFormValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const updateUserHandler = (event) => {
    event.preventDefault();
    dispatch(updateUser(formValue));
  };

  const resetFormHandler = (event) => {
    event.preventDefault();
    resetForm();
  };

  return (
    <form onReset={resetFormHandler} onSubmit={updateUserHandler} className={styles.editProfileForm}>
      <fieldset className={styles.editProfileForm__fieldset}>
        <Input name="name" placeholder="Имя" onChange={handleChangeInput} value={formValue.name} />
        <EmailInput name="email" onChange={handleChangeInput} value={formValue.email} />
        <PasswordInput name="password" onChange={handleChangeInput} value={formValue.password} />
        {checkFormEdited()
          && (
          <div className={styles.editProfileForm__buttons}>
            <Button htmlType="submit" type="primary">Сохранить</Button>
            <Button htmlType="reset" type="secondary">Отмена</Button>
          </div>
          )}
      </fieldset>
    </form>
  );
};