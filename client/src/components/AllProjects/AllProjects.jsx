import React, { useEffect } from 'react'
import style from './AllProjects.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjectsAction } from '../../redux/actions/projectAction'
import axios from 'axios'
import CardProject from '../CardProject/CardProject'
import Navbar from '../Navbar/Navbar'

function AllProjects() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const allProjects = useSelector(state => state.allProjects)

  useEffect(async () => {
    if (user) {
      await axios.get(`http://localhost:3001/project/all${user.id}`)
        .then(response => dispatch(getAllProjectsAction(response.data)))
    }
  }, [user])

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <p className={style.title}>Проекты</p>
        <input type="text" />
        <div className={style.project__navbar}>
          <p className={style.name__title}>Имя</p>
          <p className={style.type__title}>Тип</p>
        </div>
        {allProjects?.map((el) => <CardProject key={el.id} el={el} />)}
      </div>
    </>
  )
}

export default AllProjects

