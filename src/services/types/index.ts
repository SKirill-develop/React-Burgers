import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TIngredientsActions } from "../actions/interfaces";
import { store } from "../store";
import { ReactNode } from "react";

export type TIngredientType = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  id?: string;
};

export type TConstructorType = {
  bun: TIngredientType | null;
  ingredients: [][];
};

export type TOrderType = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  number: number;
};

export type TOrderDetails = {
  success: boolean;
  name: string;
  order: {
    number: number;
  };
};

export interface LocationState {
  background: LocationState;
  hash: string;
  key: string;
  pathname: string;
  search: string;
  from: string;
  state: {
    background?: {
      hash: string;
      key: string;
      pathname: string;
      search: string;
    };
  };
}

export type TUserType = {
  user: {
    email: string;
    name: string;
  };
}

export interface IWsActions {
  wsInit: string;
  wsSendMessage: string;
  onMessage: string;
  onOpen: string;
  wsClose: string;
  onError: string;
  onClose: string;
  wsCustomUrlInit: string;
}

export interface IOrdersListProps {
  placeShow?: "profile";
}

export interface IIngredientListProps {
  data: Array<TIngredientType>;
  title: string;
  id: string;
}

export interface IIngredientCardProps {
  ingredient: TIngredientType;
  count: number;
}

export interface TOrderDetailsProps {
  orderNumber: number;
}

export interface IOrderCardProps {
  orderData: TOrderType;
  showStatus?: boolean;
}

export interface IModalOverlayProps {
  closed: () => void;
}

export interface IModalProps {
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

export interface IConstructorProps {
  ingredient: TIngredientType;
  index: number;
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TIngredientsActions>
>;
