import { FC } from 'react'

import css from './contactItem.module.scss'

import arrow from 'assets/arrow-right2.svg'

type PropsType = {
  title: string
  data: string
}

export const ContactItem: FC<PropsType> = ({ title, data }) => {
  return (
    <div className={css.item_wrapper}>
      <div className="d-flex flex-row justify-content-between align-items-center my-2 p-3 border-bottom">
        <div className="d-flex flex-column">
          <span>{title}</span>
          <span>{data}</span>
        </div>
        <img className={css.arrow} src={arrow} />
      </div>
    </div>
  )
}
