// 创建新的reducer，用来合并所以的分支reducer
import { loginUserReducer } from "./loginUserReducer";
import { usersReducer } from "./usersReducer";

const initialState = {};
export const reducer = (state = initialState, action) => {
  const newState = {
    loginUser: loginUserReducer(state.loginUser, action),
    users: usersReducer(state.users, action),
  };
  return newState;
};
