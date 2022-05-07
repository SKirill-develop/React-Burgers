import { v4 as uuid } from "uuid";
import { CONSTRUCTOR_ADD } from '../constants/index'
import { TIngredientType } from '../types/index';
import { IAddIngredientToConstructor } from './interfaces';

export const addToConstructor = (ingredient: TIngredientType): IAddIngredientToConstructor => {
  return {
    type: CONSTRUCTOR_ADD,
    payload: {
      ...ingredient,
      id: uuid(),
    }
  }
}