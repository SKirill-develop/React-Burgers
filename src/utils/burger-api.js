import { url } from "./constants";
import { checkRes } from "../services/actions/ingredients"

export const orderBurger = (orderData) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: orderData,
    }),
  })
  .then(checkRes)
}