import axios from "axios";
import { ADD_NEW_TASK, DELETE_TASK, GET_EXECUTE_TASK } from "../types";

export const addNewTaskAction = (newTaskInfo, id) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3001/task/addNew',
      data: { newTaskInfo, id }
    })
    const newTask = response.data
    dispatch(setNewTaskAction(newTask))
  } catch (err) {
    console.log(err);
  }
}

export const getExecuteTasksAction = (id) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://localhost:3001/task/getExecute${id}`
    })
    const executeTasks = response.data
    dispatch(setExecuteTasksAction(executeTasks))
  } catch (err) {
    console.log(err);
  }
}

export const deleteTaskAction = (id) => async (dispatch) => {
  try {
    await axios({
      method: 'delete',
      url: `http://localhost:3001/task/delete${id}`
    })
    dispatch(setDeleteTaskAction(id))
  } catch (err) {
    console.log(err);
  }
}

export const setNewTaskAction = (newTask) => ({
  type: ADD_NEW_TASK,
  payload: newTask
})

export const setExecuteTasksAction = (executeTasks) => ({
  type: GET_EXECUTE_TASK,
  payload: executeTasks
})

export const setDeleteTaskAction = (id) => ({
  type: DELETE_TASK,
  payload: { id }
})
