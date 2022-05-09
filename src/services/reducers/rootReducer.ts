import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { constructorReducer } from "./constructor";
import { orderReducer } from "./order";
import { isAuth, user } from "./user";
import { isLoading } from "./loading";
import { errorMessage } from "./errorMessage";
import { feedOrders } from "./feedOrders";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  feedOrders: feedOrders,
  isAuth: isAuth,
  user: user,
  isLoading: isLoading,
  errorMessage: errorMessage,
});
