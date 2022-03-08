import React, { useEffect, useState } from 'react'
import style from './MakeProject.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logoutUser } from '../../redux/actions/userAction'
import { createNewProjectAction } from '../../redux/actions/projectAction'

function MakeProject() {

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const project = useSelector(state => state.project)

  const history = useHistory()

  const [checkButton, setCheckButton] = useState({
    text: 'Авторизоваться'
  })

  const [checkInput, setCheckInput] = useState({
    style: 'input',
    errText: 'Поле обязательно для заполнения',
    textStyle: 'invisible'
  })

  const [newProjectName, setNewProjectName] = useState('')
  const [typeOfProject, setTypeOfProject] = useState('Разработка ПО')

  useEffect(() => {
    if (user) {
      setCheckButton({
        text: 'Выйти из аккаунта'
      })
    }
  }, [user])

  const createProjectClick = async () => {
    if (!user) {
      history.push('/signin')
    } else if (newProjectName === '') {
      setCheckInput({
        style: 'empty__input',
        errText: 'Поле обязательно для заполнения',
        textStyle: 'visible'
      })
    } else {
      const newProjectInfo = {
        name: newProjectName,
        type: typeOfProject
      }
      dispatch(createNewProjectAction(newProjectInfo, user.id))
      setCheckInput({
        style: 'input',
        errText: 'Поле обязательно для заполнения',
        textStyle: 'invisible'
      })
    }
  }

  const redirect = () => {
    history.push(`/board${project.id}`)
  }

  useEffect(() => {
    if (project.id) {
      redirect()
    }
  }, [project])

  const chooseProjectClick = () => {
    if (user) {
      history.push('/allProjects')
    } else {
      history.push('/signin')
    }
  }

  const logOutOrAutorizeHandler = () => {
    if (checkButton.text === 'Выйти из аккаунта') {
      // console.log(document.cookie);
      dispatch(logoutUser())
    } else {
      history.push('/signin')
    }
  }

  return (
    <div className={style.create__project__container}>
      <div className={style.info__wrapper}>
        <h3>Добавление сведений о проекте</h3>
        <p className={style.info__suptitle}>Эти сведения можно изменить в любое время в настройках проекта.</p>
        <p>Название</p>
        <input className={style[checkInput.style]} type="text" name="name" placeholder="Дайте название новому проекту" onChange={(e) => setNewProjectName(e.target.value)} />
        <p className={style[checkInput.textStyle]}>{checkInput.errText}</p>
        <p>Добавление сведений о проекте</p>
        <select onChange={(e) => setTypeOfProject(e.target.value)}>
          <option>Разработка ПО</option>
          <option>Другое</option>
        </select>
        <button type="submit" onClick={createProjectClick}>Создать проект</button>
        <span>Facilis, maiores pariatur nemo ab fuga atque odio ratione sint, alias impedit magni nisi! Id similique asperiores aperiam itaque totam eius laborum.</span>
      </div>

      <div>
        <div className={style.about__wrapper}>
          <h3>Войдите в существующий проект</h3>
          <button onClick={chooseProjectClick}>Войти в существующий проект</button>
          <span>Reprehenderit veniam enim autem itaque, <br /> a dolor provident maxime, nobis voluptas  <br /> ipsam voluptatem laborum eveniet, <br /> dignissimos totam.</span>
        </div>
        <div className={style.button__wrapper}>
          <button onClick={logOutOrAutorizeHandler} className={style.logout__button}>{checkButton.text}</button>
        </div>
      </div>
    </div>
  )
}

export default MakeProject
