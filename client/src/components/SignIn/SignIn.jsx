import React, { useEffect, useState } from 'react'
import style from './SignIn.module.scss'

function SignIn() {

  const loginWithGoogle = () => {
    window.open(`http://localhost:3001/googleUser/signIn`, '_self')
  }

  return (
    <div className={style.signin__container}>
      <div className={style.logo__section}>
        <img src="/img/icons.png" alt="icon" />
        <p className={style.title}>Jira</p>
      </div>

      <div className={style.signin__wrapper}>
        <p className={style.suptitle}>Войдите в свой аккаунт</p>
        <button onClick={loginWithGoogle}>Войти с помощью Google</button>
        <span>
          Accusantium voluptates quas nemo sint tempora rem earum commodi natus enim expedita iusto, amet totam minus delectus quidem maxime corrupti et reiciendis.
        </span>
      </div>

    </div>
  )
}

export default SignIn
