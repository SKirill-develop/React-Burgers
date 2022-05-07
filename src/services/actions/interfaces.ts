import { TIngredientType, TOrderDetails, TUserType } from "../types/index";
import {
  GET_INGREDIENTS_SUCCESS,
  SET_LOADING,
  NEW_INGREDIENT,
  SET_ERROR_MESSAGE,
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_REORDER,
  CONSTRUCTOR_RESET,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  RESET_ORDER,
  SET_USER_AUTH,
  SET_USER,
  CLEAR_USER,
} from "../constants/index";

// export interface IAddIngredients {
//   readonly type: typeof NEW_INGREDIENT;
//   readonly payload: TIngredientType;
// }

export interface ISetLoading {
  readonly type: typeof SET_LOADING;
  readonly payload: boolean;
}

export interface IIngredients {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredientType>;
}

export interface ISetErrorMessage {
  readonly type: typeof SET_ERROR_MESSAGE;
  readonly payload: string;
}

export interface IAddIngredientToConstructor {
  readonly type: typeof CONSTRUCTOR_ADD | typeof CONSTRUCTOR_RESET;
  readonly payload: TIngredientType;
}

export interface IDeleteIngredientsToConstructor {
  readonly type: typeof CONSTRUCTOR_DELETE;
  readonly payload: number;
}

export interface IReorderIngredientsToConstructor {
  readonly type: typeof CONSTRUCTOR_REORDER;
  readonly payload: {
    from: number;
    to: number;
  };
}

export interface ISetUser {
  readonly type: typeof SET_USER;
  readonly payload: TUserType;
}

export interface IClearUser {
  readonly type:  typeof CLEAR_USER;
  readonly payload: null;
}

export interface ISetUserAuth {
  readonly type: typeof SET_USER_AUTH ;
  readonly payload: boolean;
}

export interface IOrderDetails {
  readonly type:
    | typeof CREATE_ORDER_REQUEST
    | typeof CREATE_ORDER_SUCCESS
    | typeof CREATE_ORDER_FAILED
    | typeof RESET_ORDER;
  readonly payload?: TOrderDetails;
}

export type TIngredientsActions =
  // | IAddIngredients
  | ISetLoading
  | IIngredients
  | ISetErrorMessage
  | IAddIngredientToConstructor
  | IDeleteIngredientsToConstructor
  | IReorderIngredientsToConstructor
  | ISetUser
  | IClearUser
  | ISetUserAuth
  | IOrderDetails;
