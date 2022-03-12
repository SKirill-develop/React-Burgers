import { url } from "./constants";

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
    .then((res) => res.json())

}