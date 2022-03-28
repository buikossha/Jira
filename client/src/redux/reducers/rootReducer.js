import { combineReducers } from 'redux'
import taskReducer from './addTaskReducer'
import allProjectsReducer from './allProjectsReducer'
import currentProjectReducer from './currentProjectReducer'
import executeTasksReducer from './executeTasksReducer'
import projectReducer from './projectReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  allProjects: allProjectsReducer,
  currentProject: currentProjectReducer,
  task: taskReducer,
  executeTasks: executeTasksReducer
})

export default rootReducer
