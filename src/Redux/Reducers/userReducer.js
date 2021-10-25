import * as types from "../Action/actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  token: "",
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.SIGNUP_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOGIN:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
