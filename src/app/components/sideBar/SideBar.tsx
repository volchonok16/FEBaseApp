import { FC } from 'react'

import css from './sideBar.module.scss'

import { Menu } from 'app/components/menu/Menu'
import logout from 'assets/logout.svg'

export const SideBar: FC = () => {
  return (
    <div className={css.sideBar_wrapper}>
      <div className={css.logo}>АТП-Онлайн</div>
      <div className={css.name}>Личный кабинет</div>
      <Menu />
      <div className={css.logout_wrapper}>
        <img src={logout} />
        <div className={css.logout_text}>Выход</div>
      </div>
    </div>
  )
}
