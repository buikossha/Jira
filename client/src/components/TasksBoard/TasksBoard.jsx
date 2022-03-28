import React, { useEffect, useState } from 'react'
import style from './TaskBoard.module.scss'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProjectAction } from '../../redux/actions/projectAction'
import { useHistory, useParams } from 'react-router'
import { addNewTaskAction, getExecuteTasksAction } from '../../redux/actions/taskAction'
import TaskForm from '../TaskForm/TaskForm'


function TasksBoard() {

  const dispatch = useDispatch()
  const history = useHistory()

  const { id } = useParams()

  const project = useSelector(state => state.project)
  const currentProject = useSelector(state => state.currentProject)
  const task = useSelector(state => state.task)
  const executeTasks = useSelector(state => state.executeTasks)
  console.log(executeTasks);

  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    if (project) {
      dispatch(getCurrentProjectAction(id))
    }
  }, [project])

  useEffect(() => {
    dispatch(getExecuteTasksAction(id))
  }, [task])

  const allProjectsClick = () => {
    history.push('/allProjects')
  }

  const [openInput, setOpenInput] = useState({
    style: 'make__task__section'
  })

  const addNewTaskClick = () => {
    setOpenInput({
      style: 'input__section'
    })
  }


  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTaskClick = () => {
    dispatch(addNewTaskAction(newTask, id))
    setOpenInput({
      style: 'make__task__section'
    })
  }

  return (
    <>
      <Navbar />
      <div className={style.board__container}>

        <div className={style.board__info__section}>
          <p className={style.project__suptitle} onClick={allProjectsClick}>Проекты</p>
          <p className={style.project__title}>Доска {currentProject.name} </p>
          <input type="text" />

          <div className={style.sections__wrapper}>

            <div className={style[openInput.style]}>
              <p>К ВЫПОЛНЕНИЮ</p>
              {executeTasks?.map((el) => <TaskForm {...el} key={el.id} projectName={currentProject.name}/>)}
              <button className={style.add__button} onClick={addNewTaskClick}> Создать задачу</button>
              <textarea onChange={handleChange} name="name" placeholder="Что нужно сделать?"></textarea>
              <button onClick={addTaskClick} className={style.add__task__button}>+</button>
            </div>

            <div className={style.in__work__section}>
              <p>В РАБОТЕ</p>
            </div>

            <div className={style.done__section}>
              <p>ГОТОВО</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TasksBoard
