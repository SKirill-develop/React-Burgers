import { TIngredientType } from "../types/index";
import { GET_INGREDIENTS_SUCCESS, SET_LOADING , NEW_INGREDIENT} from "../constants/index";

export interface IAddIngredients {
  readonly type: typeof NEW_INGREDIENT;
  readonly payload: Array<TIngredientType>;
}

export interface ISetLoading {
  readonly type: typeof SET_LOADING;
  readonly payload: boolean;
}

export interface IIngredients {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredientType>;
}

export type TIngredientsActions = IAddIngredients | ISetLoading | IIngredients;
