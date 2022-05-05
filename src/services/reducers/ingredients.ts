import { GET_INGREDIENTS_SUCCESS } from "../constants/index";
import { IIngredients } from '../actions/interfaces';
import { TIngredientType} from '../types/index';

export const ingredientsReducer = (state: Array<TIngredientType> = [], action: IIngredients) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS:
      return action.payload ;
    default:
      return state;
  }
};
