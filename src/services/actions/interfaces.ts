import {
  TIngredientType,
  TOrderDetails,
  TOrderState,
  TUserType,
  TWsOrdersType,
} from "../types/index";
import {
  GET_INGREDIENTS_SUCCESS,
  SET_LOADING,
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
import { SET_WS_ORDERS } from "../actions/webSockets";

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
  readonly type: typeof CLEAR_USER;
  readonly payload: null;
}

export interface ISetUserAuth {
  readonly type: typeof SET_USER_AUTH;
  readonly payload: boolean;
}

export interface IOrderDetails {
  readonly type:
    | typeof CREATE_ORDER_REQUEST
    | typeof CREATE_ORDER_FAILED
    | typeof RESET_ORDER;
  readonly payload?: TOrderState;
}

export interface IOrderDetailsSuccess {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  readonly payload?: TOrderDetails;
}

export interface ISetWSOrders {
  readonly type: typeof SET_WS_ORDERS;
  readonly payload: TWsOrdersType;
}

export type TIngredientsActions =
  | ISetLoading
  | IIngredients
  | ISetErrorMessage
  | IAddIngredientToConstructor
  | IDeleteIngredientsToConstructor
  | IReorderIngredientsToConstructor
  | ISetUser
  | IClearUser
  | ISetUserAuth
  | IOrderDetails
  | IOrderDetailsSuccess
  | ISetWSOrders;
