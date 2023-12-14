import { FC } from 'react'

import css from './Modal.module.css'

import { DataType } from '../../../features/ownerProfile/OwnerProfile'

type PropsType = {
  personalData: string
  dataType: DataType
  hideModal: () => void
}

export const Modal: FC<PropsType> = ({ personalData, dataType, hideModal }) => {
  const closeModal = () => {
    hideModal()
  }

  const sendRequest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('Send request')
    closeModal()
  }

  return (
    <div className={css.modal}>
      <button className={css.btn} onClick={closeModal}>
        X
      </button>
      <form className={css.form}>
        <label>
          <b>Сменить {personalData}</b>
        </label>
        <div className={css.formField}>
          <span>Введите пароль</span>
          <input type="password" />
        </div>
        <div className={css.formField}>
          <span>Введите новый {personalData}</span>
          <input type={dataType} />
        </div>
        <div className={css.formField}>
          <span>Подтвердите новый {personalData}</span>
          <input type={dataType} />
        </div>
        <button className={css.btn} onClick={sendRequest}>
          Ok
        </button>
      </form>
    </div>
  )
}
