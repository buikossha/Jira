import { GET_EXECUTE_TASK } from "../types";

export default function executeTasksReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_EXECUTE_TASK: {
      return payload
    }
    default:
      return state
  }
}
