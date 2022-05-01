import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { ingredientDetailsReducer } from "./ingredient-detail-modal";
import { orderReducer } from "./order";
import { isAuth, user } from "./user";
import { isLoading } from "./loading";
import { feedOrders } from "./feedOrders";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  feedOrders: feedOrders,
  ingredientsDetailModal: ingredientDetailsReducer,
  isAuth: isAuth,
  user: user,
  isLoading: isLoading,
});
