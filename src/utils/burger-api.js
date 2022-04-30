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

export const resetPassword = (email) => {
  return  fetch(`${url}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email,
    }),
  })
  .then(checkRes)
}

export const registerUser = (email, password, username) => {
  return  fetch(`${url}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
      "name": username,
    }),
  })
  .then(checkRes)
}

export const loginUser = (email, password,) => {
  return fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    }),
  })
  .then(checkRes)
}

export const logoutUser = () => {
  return fetch(`${url}/auth/logout`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${localStorage.getItem('refreshToken')}`,
    }),
  })
    .then(checkRes);
}

export const getUserApi = () => {
  return fetch(`${url}/auth/user`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem('accessToken')}`
    },
  })
    .then(checkRes);
}

export const updateUserApi = (name, email, password) => {
  return fetch(`${url}/auth/user`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then(checkRes);
}

export const resetPasswordApi = (email) => {
  return fetch(`${url}/password-reset`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then(checkRes);
}

export const setNewPasswordApi = (password, token) => {
  return fetch(`${url}/password-reset/reset/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
    }),
  })
    .then(checkRes);
}

export const resetRefreshTokenApi = () => {
  return fetch(`${url}/auth/token`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${localStorage.getItem('refreshToken')}`,
    }),
  })
    .then(checkRes);
}