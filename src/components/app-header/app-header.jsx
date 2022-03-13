import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

const AppHeader = () => (
  <header className={styles.header + ' text text_type_main-default'} >
    <nav className={styles.header__nav+ ' p-4'} >
      <ul className={styles.header__links} >
        <li className={styles.header__list_item} >
          <a href="#" className={styles.header__link}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </a>
        </li>
        <li className={styles.header__list_item + ' ml-8'} >
          <a href="#" className={styles.header__link}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default header__text text_color_inactive">
              Лента заказов
            </p>
          </a>
        </li>
      </ul>
      <a href="#" className={styles.header__link}>
        <Logo />
      </a>
      <a href="#" className={styles.header__profile}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">
          Личный кабинет
        </p>
      </a>
    </nav>
  </header>
);

export default AppHeader;
