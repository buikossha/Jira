import axios from 'axios'
import { REMOVE__COOKIE, SET_NEW_USER } from '../types'

export const googleCheckAuth = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/googleUser/checkAuth', { withCredentials: true })
    dispatch({
      type: SET_NEW_USER,
      payload: response.data
    })
  } catch (err) {
    console.log(err);
  }
}

export const logoutUser = () => async (dispatch) => {
  console.log('action');
  await axios({
    method: 'GET',
    url: 'http://localhost:3001/googleUser/logout'
  }, { withCredentials: true })
  dispatch({ type: REMOVE__COOKIE, payload: null })
}

