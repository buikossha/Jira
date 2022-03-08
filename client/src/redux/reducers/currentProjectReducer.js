import { GET_CURRENT_PROJECT } from "../types"

export default function currentProjectReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_CURRENT_PROJECT: {
      return payload
    }
    default:
      return state
  }
}
