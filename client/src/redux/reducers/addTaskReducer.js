import { ADD_NEW_TASK } from "../types";

export default function taskReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case ADD_NEW_TASK: {
      return payload
    }
    default:
      return state
  }
}
