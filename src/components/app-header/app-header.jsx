import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "./app-header.module.css";

const AppHeader = () => {
  const onMainPage = useRouteMatch({ path: "/", exact: true });
  const onProfilePage = useRouteMatch({ path: "/profile" });
  const onFeedPage = useRouteMatch({ path: "/feed" });

  return (
    <header className={styles.header + " text text_type_main-default"}>
      <nav className={styles.header__nav + " p-4"}>
        <ul className={styles.header__links}>
          <li className={styles.header__list_item}>
            <NavLink exact to="/" className={styles.header__link}>
              <BurgerIcon type={onMainPage ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default">Конструктор</p>
            </NavLink>
          </li>
          <li className={styles.header__list_item + " ml-8"}>
            <NavLink to="/feed" className={styles.header__link}>
              <ListIcon type={onFeedPage ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default header__text text_color_inactive">
                Лента заказов
              </p>
            </NavLink>
          </li>
        </ul>
        <a href="/" className={styles.header__link}>
          <Logo />
        </a>
        <NavLink to="/profile" className={styles.header__profile} >
          <ProfileIcon type={onProfilePage ? 'primary' : 'secondary'} />
          <p className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
