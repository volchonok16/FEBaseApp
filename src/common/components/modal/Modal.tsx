import { FC } from 'react'

import css from './Modal.module.css'

type PropsType = {
  hideModal: () => void
}

export const Modal: FC<PropsType> = ({ hideModal }) => {
  const closeModal = () => {
    hideModal()
  }

  const sendRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('Send request')
  }

  return (
    <div className={css.modal}>
      <form className={css.form}>
        <button className={css.btn} onClick={closeModal}>
          X
        </button>
        <label>
          <b>Сменить пароль</b>
        </label>
        <div className={css.formField}>
          <span>Введите пароль</span>
          <input type="password" />
        </div>
        <div className={css.formField}>
          <span>Придумайте новый пароль</span>
          <input type="password" />
        </div>
        <div className={css.formField}>
          <span>Подтвердите новый пароль</span>
          <input type="password" />
        </div>
        <button className={css.btn} onClick={sendRequest}>
          Ok
        </button>
      </form>
    </div>
  )
}
