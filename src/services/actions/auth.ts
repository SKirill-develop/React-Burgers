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
import { setLoading } from "./loading";
import { setErrorMessage } from "./errorMessage";
import { SET_USER_AUTH, SET_USER, CLEAR_USER } from "../constants/index";
import { AppThunk, TUserInfoType, TUserType } from "../types/index";
import { ISetUser } from "./interfaces";

export const setIsAuth = (data: boolean) => ({
  type: SET_USER_AUTH,
  payload: data,
});

export const setUserData = (data: TUserType): ISetUser => ({
  type: SET_USER,
  payload: data,
});

export const clearUserData = () => ({
  type: CLEAR_USER ,
  payload: null,
});

const resetRefreshToken: AppThunk = (next: any) => (dispatch) => {
  const token = localStorage.getItem("refreshToken");
  if (token) {
    resetRefreshTokenApi()
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch(next);
        }
      })
      .catch((error) => {
        localStorage.removeItem("accessToken");
        dispatch(setErrorMessage("Не получилось обновить токен"));
        setTimeout(() => {
          dispatch(setErrorMessage(""));
        }, 2000);
      });
  } else {
    console.log(`ERROR`);
  }
};

export const register: AppThunk = (email: string, password: string, name: string) => (dispatch) => {
  dispatch(setLoading(true));
  registerUser(email, password, name)
    .then((res) => {
      dispatch(setUserData(res.user));
      dispatch(setIsAuth(true));
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((error) => {
      dispatch(setErrorMessage("Ошибка при регистрации"));
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
    })
    .finally(() => dispatch(setLoading(false)));
};

export const login: AppThunk = (email: string, password: string) => (dispatch) => {
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
    .catch((error) => {
      dispatch(setErrorMessage("Ошибка авторизации"));
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
    })
    .finally(() => dispatch(setLoading(false)));
};

export const logout: AppThunk = () => (dispatch) => {
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
      dispatch(setErrorMessage("Ошибка"));
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
    })
    .finally(() => dispatch(setIsAuth(false)));
};

export const getUser: AppThunk = () => (dispatch) => {
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
          dispatch(setErrorMessage("Ошибка авторизации"));
          setTimeout(() => {
            dispatch(setErrorMessage(""));
          }, 2000);
        }
      })
      .finally(() => dispatch(setLoading(false)));
};

export const updateUser: AppThunk = (data: TUserInfoType) => (dispatch) => {
  const { name, email, password } = data;
  updateUserApi(name, email, password)
    .then((res) => {
      dispatch(setUserData(res.user));
    })
    .catch((error) => {
      if (error.status === 403) {
        console.log(`${error}`);
        dispatch(resetRefreshToken(updateUser(data)));
      }
      dispatch(setErrorMessage("Ошибка обновления токена"));
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
      console.log(`ERROR: ${error}`);
    });
};

export const resetPassword: AppThunk = (email: string) => (dispatch) => {
  dispatch(setLoading(true));
  resetPasswordApi(email)
    .then((res) => console.log(res))
    .catch((error) => {
      dispatch(setErrorMessage("Ошибка cброса пароля"));
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
    })
    .finally(() => dispatch(setLoading(false)));
};

export const setNewPassword: AppThunk = (password: string, token: string) => (dispatch) => {
  dispatch(setLoading(true));
  setNewPasswordApi(password, token)
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(`ERROR: ${error}`);
      dispatch(setErrorMessage("Ошибка установки нового пароля"));
      setTimeout(() => {
        dispatch(setErrorMessage(""));
      }, 2000);
    })
    .finally(() => dispatch(setLoading(false)));
};
