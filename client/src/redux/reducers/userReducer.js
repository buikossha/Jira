import { REMOVE__COOKIE, SET_NEW_USER } from "../types";

const userReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_NEW_USER:
      return payload
    case REMOVE__COOKIE:
      return payload
    default:
      return state;
  }
}

export default userReducer
