import { FC } from 'react'

import css from './contactItem.module.scss'

import { DataType } from '../OwnerProfile'

import arrow from 'assets/arrow-right2.svg'

type PropsType = {
  title: string
  data: string
  personalData: string
  dataType: DataType
  showModal: (personalData: string, dataType: DataType) => void
}

export const ContactItem: FC<PropsType> = ({
  title,
  data,
  personalData,
  dataType,
  showModal,
}) => {
  const openModal = () => {
    showModal(personalData, dataType)
  }

  return (
    <div className={css.item_wrapper}>
      <div className="d-flex flex-row justify-content-between align-items-center my-2 p-3 border-bottom">
        <div className="d-flex flex-column">
          <span>{title}</span>
          <span>{data}</span>
        </div>
        <img className={css.arrow} src={arrow} onClick={openModal} />
      </div>
    </div>
  )
}
