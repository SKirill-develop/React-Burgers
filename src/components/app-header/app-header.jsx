import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./app-header.module.css";

const AppHeader = () => (
  <header className={HeaderStyles.header + ' text text_type_main-default'} >
    <nav className={HeaderStyles.header__nav+ ' p-4'} >
      <ul className={HeaderStyles.header__links} >
        <li className={HeaderStyles.header__list_item} >
          <a href="#" className={HeaderStyles.header__link}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </a>
        </li>
        <li className={HeaderStyles.header__list_item + ' ml-8'} >
          <a href="#" className={HeaderStyles.header__link}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default header__text text_color_inactive">
              Лента заказов
            </p>
          </a>
        </li>
      </ul>
      <a href="#" className={HeaderStyles.header__link}>
        <Logo />
      </a>
      <a href="#" className={HeaderStyles.header__profile}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive">
          Личный кабинет
        </p>
      </a>
    </nav>
  </header>
);

export default AppHeader;
