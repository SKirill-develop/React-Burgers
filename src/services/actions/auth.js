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

export const SET_USER_AUTH = "SET_USER_AUTH";
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const setIsAuth = (data) => ({
  type: SET_USER_AUTH,
  payload: data,
});

export const setUserData = (data) => ({
  type: SET_USER,
  payload: data,
});

export const clearUserData = () => ({ type: CLEAR_USER });

const resetRefreshToken = (next) => {
  const token = localStorage.getItem("refreshToken");
  if (token) {
    resetRefreshTokenApi()
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          console.log(res);
          next();
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
  registerUser(email, password, name)
    .then((res) => {
      dispatch(setUserData(res.user));
      dispatch(setIsAuth(true));
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((error) => console.log(`ERROR: ${error}`));
};

export const login = (email, password) => (dispatch) => {
  loginUser(email, password)
    .then((res) => {
      if (res.success) {
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch(setUserData(res.user));
        dispatch(setIsAuth(true));
      }
    })
    .catch((error) => console.log(`ERROR: ${error}`));
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
          console.log(`getUser 403: ${error}`);
          resetRefreshToken(getUser());
        } else {
          console.log(`ERROR: ${error}`);
        }
        console.log(`ERROR: ${error}`);
      });
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

export const resetPassword = (email) => {
  resetPasswordApi(email)
    .then((res) => console.log(res))
    .catch((error) => console.log(`ERROR: ${error}`));
};

export const setNewPassword = (password, token) => {
  setNewPasswordApi(password, token)
    .then((res) => console.log(res))
    .catch((error) => console.log(`ERROR: ${error}`));
};
