import React from 'react'
import style from './Navbar.module.scss'

function Navbar() {
  return (
    <div className={style.navbar__container}>
      <img src="/img/icons.png" alt="icon"/>
      <p className={style.navbar__title}>Jira Software</p>
    </div>
  )
}

export default Navbar
