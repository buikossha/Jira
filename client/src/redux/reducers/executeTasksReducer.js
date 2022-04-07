import { DELETE_TASK, GET_EXECUTE_TASK } from "../types";

export default function executeTasksReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_EXECUTE_TASK: {
      return payload
    } case DELETE_TASK: {
      const { id } = payload
      return state.filter((el) => el.id !== id)
    }
    default:
      return state
  }
}
