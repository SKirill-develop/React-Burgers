import {
  registerUser,
  loginUser,
  logoutUser,
  getUserApi,
  updateUserApi,
  resetPasswordApi,
  setNewPasswordApi,
  resetRefreshTokenApi,
} from "../../utils/burger-api";
import { setLoading } from '../actions/loading';
import { SET_USER_AUTH, SET_USER, CLEAR_USER } from "../constants/index";

export const setIsAuth = (data) => ({
  type: SET_USER_AUTH,
  payload: data,
});

export const setUserData = (data) => ({
  type: SET_USER,
  payload: data,
});

export const clearUserData = () => ({ type: CLEAR_USER });

const resetRefreshToken = (next) => dispatch => {
  const token = localStorage.getItem("refreshToken");
  if (token) {
    resetRefreshTokenApi()
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          console.log(res);
          dispatch(next);
        }
      })
      .catch((error) => {
        localStorage.removeItem("accessToken");
        console.log(`ERROR: ${error}`);
      });
  } else {
    console.log(`ERROR`);
  }
};

export const register = (email, password, name) => (dispatch) => {
  dispatch(setLoading(true));
  registerUser(email, password, name)
    .then((res) => {
      dispatch(setUserData(res.user));
      dispatch(setIsAuth(true));
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((error) => console.log(`ERROR: ${error}`))
    .finally(() => dispatch(setLoading(false)));
};

export const login = (email, password) => (dispatch) => {
  dispatch(setLoading(true));
  loginUser(email, password)
    .then((res) => {
      if (res.success) {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch(setUserData(res.user));
        dispatch(setIsAuth(true));
      }
    })
    .catch((error) => console.log(`ERROR: ${error}`))
    .finally(() => dispatch(setLoading(false)));
};

export const logout = () => (dispatch) => {
  logoutUser()
    .then((res) => {
      if (res.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(clearUserData());
      }
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    })
    .finally(() => dispatch(setIsAuth(false)));
};

export const getUser = () => (dispatch) => {
  dispatch(setLoading(true));
  const token = localStorage.getItem("accessToken");
  token &&
    getUserApi()
      .then((res) => {
        if (res.success) {
          dispatch(setUserData(res.user));
          dispatch(setIsAuth(true));
        }
      })
      .catch((error) => {
        if (error.status === 403) {
          dispatch(resetRefreshToken(getUser()));
        } else {
          console.log(`ERROR: ${error.status}`);
        }
        console.log(`ERROR: ${error.status}`);
      })
    .finally(() => dispatch(setLoading(false)));
};

export const updateUser = (data) => (dispatch) => {
  const { name, email, password } = data;
  updateUserApi(name, email, password)
    .then((res) => {
      dispatch(setUserData(res.user));
    })
    .catch((error) => {
      if (error.status === 403) {
        console.log(`${error}`);
        resetRefreshToken(updateUser(data))
      }
      console.log(`ERROR: ${error}`);
    });
};

export const resetPassword = (email) => (dispatch) =>  {
  dispatch(setLoading(true));
  resetPasswordApi(email)
    .then((res) => console.log(res))
    .catch((error) => console.log(`ERROR: ${error}`))
    .finally(() => dispatch(setLoading(false)));
};

export const setNewPassword = (password, token) => (dispatch) => {
  dispatch(setLoading(true));
  setNewPasswordApi(password, token)
    .then((res) => console.log(res))
    .catch((error) => console.log(`ERROR: ${error}`))
    .finally(() => dispatch(setLoading(false)));
};
