import React, { useEffect, useState } from 'react'
import DotsSVG from '../../SVG/DotsSVG'
import style from './TaskForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTaskAction, getExecuteTasksAction } from '../../redux/actions/taskAction'

function TaskForm({ id, name, status, createdAt, projectName }) {

  const dispatch = useDispatch()

  const [openSettings, setOpenSettings] = useState('settings__hidden')
  const executeTasks = useSelector(state => state.executeTasks)

  const openSettingsClick = () => {
    if (openSettings === 'settings__hidden') {
      setOpenSettings('settings__visible')
    } else {
      setOpenSettings('settings__hidden')
    }
  }

  const deleteTaskClick = () => {
    dispatch(deleteTaskAction(id))
  }

  const changeStatusClick = (e) => {
    //tri onclicka pohody
  }

  return (
    <div className={style.container}>
      <p className={style.form__name}>{name}</p>
      <p className={style.form__project__name}>{projectName}</p>
      <button onClick={openSettingsClick} className={style.form__button}><DotsSVG /></button>
      <div className={style[openSettings]}>
        <p className={style.title__settings}>Действия</p>
        <p onClick={deleteTaskClick} className={style.settings}>удалить</p>
        <p className={style.title__settings}>поменять статус</p>
        <p onClick={changeStatusClick} className={style.settings}>в работе</p>
        <p className={style.settings}>готово</p>
        <p className={style.settings}>к выполнению</p>
      </div>
    </div>
  )
}

export default TaskForm
