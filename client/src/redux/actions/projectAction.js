import axios from "axios";
import { ADD_NEW_PROJECT, GET_CURRENT_PROJECT, GET__ALL_PROJECTS } from "../types";

//middleware

export const createNewProjectAction = (newProjectInfo, id) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3001/project/addNew',
      data: { newProjectInfo, id }
    })
    const newProject = response.data
    dispatch(setNewProjectAction(newProject))
  } catch (err) {
    console.log(err);
  }
}

export const getCurrentProjectAction = (id) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:3001/project/current${id}`
    })
    const currentProject = response.data
    dispatch(setCurrentProjectAction(currentProject))
  } catch (err) {
    console.log(err);
  }
}

//actioncreator

export const setNewProjectAction = (newProject) => ({
  type: ADD_NEW_PROJECT,
  payload: newProject
})

export const getAllProjectsAction = (allProjects) => ({
  type: GET__ALL_PROJECTS,
  payload: allProjects
})

export const setCurrentProjectAction = (currentProject) => ({
  type: GET_CURRENT_PROJECT,
  payload: currentProject
})
