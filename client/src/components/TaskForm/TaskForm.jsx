import React from 'react'
import style from './TaskForm.module.scss'

function TaskForm({ id, name, status, createdAt, projectName }) {
  return (
    <div className={style.container}>
      <p className={style.form__name}>{name}</p>
      <p className={style.form__project__name}>{projectName}</p>
    </div>
  )
}

export default TaskForm
