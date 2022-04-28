import {
  registerUser,
  loginUser,
  logoutUser,
  getUserApi,
  updateUserApi,
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

export const register = (email, password, name) => (dispatch) => {
  registerUser(email, password, name)
    .then((res) => {
        dispatch(setUserData(res.user));
        dispatch(setIsAuth(true));
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((error) => {
      console.log(`REGISTER_USER_ERROR: ${error}`);
    });
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
    .catch((error) => {
      console.log(`REGISTER_USER_ERROR: ${error}`);
    });
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
      console.log(`LOGOUT_ERROR: ${error}`);
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
        console.log(`GET_USER_ERROR: ${error.message}`);
      });
};

export const updateUser = (data) => (dispatch) => {
  const { name, email, password } = data;
  updateUserApi(name, email, password)
    .then((res) => {
      dispatch(setUserData(res.user));
    })
    .catch((error) => {
      console.log(`GET_USER_ERROR: ${error}`);
    });
};
