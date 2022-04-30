import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { ingredientDetailsReducer } from './ingredient-detail-modal';
import { orderReducer } from './order';
import { isAuth, user } from './user';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredientsDetailModal: ingredientDetailsReducer,
  isAuth: isAuth,
  user: user,
});