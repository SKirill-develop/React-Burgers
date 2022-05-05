import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TIngredientsActions } from '../actions/interfaces'
import { store } from '../store';

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
}

export type TOrderType = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  number: number;
}

export type TOrderDetails = {
  success: boolean;
  name: string;
  order: {
    number: number;
  };
}

export interface IOrdersListProps {
  placeShow?: 'profile'
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
  orderNumber: number,
}

export interface IOrderCardProps {
  orderData: TOrderType;
  showStatus?: boolean;
}

export type AppDispatch = Dispatch<TIngredientsActions>;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TIngredientsActions>
>;