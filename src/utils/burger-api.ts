import { url } from "./constants";

export const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const orderBurger = (orderData: Array<string>) => {
  return fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      ingredients: orderData,
    }),
  }).then(checkRes);
};

export const resetPassword = (email: string) => {
  return fetch(`${url}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(checkRes);
};

export const registerUser = (
  email: string,
  password: string,
  username: string
) => {
  return fetch(`${url}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: username,
    }),
  }).then(checkRes);
};

export const loginUser = (email: string, password: string) => {
  return fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(checkRes);
};

export const logoutUser = () => {
  return fetch(`${url}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${localStorage.getItem("refreshToken")}`,
    }),
  }).then(checkRes);
};

export const getUserApi = () => {
  return fetch(`${url}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then(checkRes);
};

export const updateUserApi = (
  name: string,
  email: string,
  password: string
) => {
  return fetch(`${url}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then(checkRes);
};

export const resetPasswordApi = (email: string) => {
  return fetch(`${url}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  }).then(checkRes);
};

export const setNewPasswordApi = (password: string, token: string) => {
  return fetch(`${url}/password-reset/reset/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
    }),
  }).then(checkRes);
};

export const resetRefreshTokenApi = () => {
  return fetch(`${url}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${localStorage.getItem("refreshToken")}`,
    }),
  }).then(checkRes);
};
