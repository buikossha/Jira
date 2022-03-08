import React, { useEffect, useState } from 'react'
import style from './TaskBoard.module.scss'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentProjectAction } from '../../redux/actions/projectAction'
import { useHistory, useParams } from 'react-router'
import { } from 'react-router-dom'

function TasksBoard() {

  const dispatch = useDispatch()
  const history = useHistory()

  const { id } = useParams()

  const project = useSelector(state => state.project)

  const currentProject = useSelector(state => state.currentProject)

  useEffect(() => {
    if (project) {
      dispatch(getCurrentProjectAction(id))
    }
  }, [project])

  const [openSection, setOpenSection] = useState({
    sectionStyle: 'close__section',
  })

  const openClick = () => {
    setOpenSection({
      sectionStyle: 'open__section',
    })
  }

  const closeClick = () => {
    setOpenSection({
      sectionStyle: 'close__section',
    })
  }

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

  const addTaskClick = () => {
    setOpenInput({
      style: 'make__task__section'
    })
  }

  return (
    <>
      <Navbar />
      <div className={style.board__container}>
        <div className={style[openSection.sectionStyle]}>
          <button className={style.open__button} onClick={openClick}>o</button>
          <button className={style.close__button} onClick={closeClick}>c</button>
        </div>


        <div className={style.board__info__section}>
          <p className={style.project__suptitle} onClick={allProjectsClick}>Проекты</p>
          <p className={style.project__title}>Доска {currentProject.name} </p>
          <input type="text" />

          <div className={style.sections__wrapper}>

            <div className={style[openInput.style]}>
              <div className={style.inner__wrapper}>
                <p>К ВЫПОЛНЕНИЮ</p>
              </div>
              <button className={style.add__button} onClick={addNewTaskClick}> Создать задачу</button>
              <textarea name="name" placeholder="Что нужно сделать?"></textarea>
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
