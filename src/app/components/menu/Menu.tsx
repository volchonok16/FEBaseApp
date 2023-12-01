import { FC } from 'react'

import css from './menu.module.scss'

import profile from 'assets/profile.svg'
import services from 'assets/services.svg'
import settings from 'assets/settings.svg'

export const Menu: FC = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Профиль',
      img: profile,
    },
    {
      id: 2,
      title: 'Настройки',
      img: settings,
    },
    {
      id: 3,
      title: 'Сервисы',
      img: services,
    },
  ]

  return (
    <div>
      {menuItems.map((item) => (
        <div key={item.id} className={css.item_wrapper}>
          <img src={item.img} />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  )
}
