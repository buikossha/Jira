import { GET__ALL_PROJECTS } from "../types";

export default function allProjectsReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET__ALL_PROJECTS: {
      return payload
    }
    default:
      return state
  }
}
