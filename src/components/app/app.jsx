import AppHeader from "../app-header/app-header";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import appStyles from './app.module.css';
import { data } from "../../utils/data";
import PropTypes from "prop-types";

const App = () => (
  <div>
    <AppHeader />
    <div className={appStyles.app__container}>
    <BurgerIngredients data={data}/>
    <BurgerConstructor data={data}/>
    </div>
  </div>
)

BurgerIngredients.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  _id: PropTypes.string,
  type: PropTypes.string,
};

export default App;