import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useRouteMatch, Link } from "react-router-dom";
import styles from "./app-header.module.css";

const AppHeader = () => {
  const isConstructor = useRouteMatch({ path: "/", exact: true });
  const isProfile = useRouteMatch({ path: "/profile" });
  const isFeed = useRouteMatch({ path: "/feed" });

  return (
    <header className={styles.header + " text text_type_main-default"}>
      <nav className={styles.header__nav + " p-4"}>
        <ul className={styles.header__links}>
          <li className={styles.header__list_item}>
            <NavLink exact to="/" className={styles.header__link} activeClassName={styles.link__active}>
              <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default">Конструктор</p>
            </NavLink>
          </li>
          <li className={styles.header__list_item + " ml-8"}>
            <NavLink to="/feed" className={styles.header__link} activeClassName={styles.link__active}>
              <ListIcon type={isFeed ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default header__text">
                Лента заказов
              </p>
            </NavLink>
          </li>
        </ul>
        <Link to="/" className={styles.header__link}>
          <Logo />
        </Link>
        <NavLink to="/profile" className={styles.header__profile} activeClassName={styles.link__active}>
          <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
          <p className="text text_type_main-default">
            Личный кабинет
          </p>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
