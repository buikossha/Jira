import React from 'react'
import style from './CardProject.module.scss'
import { useHistory } from 'react-router-dom'


function CardProject({ el }) {

  const history = useHistory()

  const openProjectClick = () => {
    history.push(`/board${el.id}`)

  }

  return (
    <div className={style.project__container}>
      <p className={style.name__suptitle} onClick={openProjectClick}>{el.name}</p>
      <p className={style.type__suptitle}>{el.type}</p>
    </div>
  )
}

export default CardProject
