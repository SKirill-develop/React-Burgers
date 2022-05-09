import {
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_DELETE,
  CONSTRUCTOR_REORDER,
  CONSTRUCTOR_RESET,
} from "../constants/index";
import {
  IAddIngredientToConstructor,
  IDeleteIngredientsToConstructor,
  IReorderIngredientsToConstructor,
} from "../actions/interfaces";
import { TConstructorType } from "../types/index";

const initialState = {
  bun: null,
  ingredients: [],
};

export const constructorReducer = (
  state: TConstructorType = initialState,
  action:
    | IAddIngredientToConstructor
    | IDeleteIngredientsToConstructor
    | IReorderIngredientsToConstructor
): TConstructorType => {
  switch (action.type) {
    case CONSTRUCTOR_ADD: {
      if (action.payload.type === "bun") {
        return { ...state, bun: action.payload };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case CONSTRUCTOR_DELETE: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.slice(0, action.payload),
          ...state.ingredients.slice(action.payload + 1),
        ],
      };
    }
    case CONSTRUCTOR_REORDER: {
      const ingredients = [...state.ingredients];
      ingredients.splice(
        action.payload.to,
        0,
        ingredients.splice(action.payload.from, 1)[0]
      );
      return {
        ...state,
        ingredients,
      };
    }
    case CONSTRUCTOR_RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
