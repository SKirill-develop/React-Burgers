import { SyntheticEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from '../../services/hooks';
import { logout } from '../../services/actions/auth';
import styles from './profileNav.module.css';

export const ProfileNav = () => {
  const dispatch = useDispatch();
  const logoutHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={styles.profileNav__nav}>
      <ul className={styles.profileNav__links}>
        <li>
          <NavLink
            activeClassName={styles.profileNav__link_active}
            className={`text text_type_main-medium text_color_inactive ${styles.profileNav__link}`}
            to="/profile"
            exact
          >
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.profileNav__link_active}
            className={`text text_type_main-medium text_color_inactive ${styles.profileNav__link}`}
            to="/profile/orders"
          >
            История заказов
          </NavLink>
        </li>
        <li>
          <button
            onClick={logoutHandler}
            className={`text text_type_main-medium text_color_inactive ${styles.profileNav__logoutButton}`}
          >
            Выход
          </button>
        </li>
      </ul>
      <div className="p-10" />
      <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменить свои персональные данные</p>
    </div>
  );
};