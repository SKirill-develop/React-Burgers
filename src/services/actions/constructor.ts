import { v4 as uuid } from "uuid";
import { CONSTRUCTOR_ADD } from '../constants/index'

export const addToConstructor = (ingredient: any) => {
  return {
    type: CONSTRUCTOR_ADD,
    payload: {
      ...ingredient,
      id: uuid(),
    }
  }
}