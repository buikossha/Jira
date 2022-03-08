import { combineReducers } from 'redux'
import allProjectsReducer from './allProjectsReducer'
import currentProjectReducer from './currentProjectReducer'
import projectReducer from './projectReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  allProjects: allProjectsReducer,
  currentProject: currentProjectReducer
})

export default rootReducer
