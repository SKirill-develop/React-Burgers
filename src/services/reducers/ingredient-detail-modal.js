import {
  SET_INGREDIENT_MODAL,
  RESET_INGREDIENT_MODAL,
} from "../constants/index";

const initialState = {
  data: null,
}

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_MODAL: {
      return {
        ...state,
        data: action.ingredient,
      };
    }
    case RESET_INGREDIENT_MODAL: {
      return initialState
    }
    default: {
      return state;
    }
  }
}