import { ADD_NEW_PROJECT } from "../types";

export default function projectReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case ADD_NEW_PROJECT: {
      return  payload
    }
    default:
      return state
  }
}
