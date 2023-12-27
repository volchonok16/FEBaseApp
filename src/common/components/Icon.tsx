import { FC } from 'react'

import { ReactComponent as Logout } from 'assets/logout.svg' // нужно импортировать как компоненту, чтобы менять цвет иконки
import { ReactComponent as Profile } from 'assets/profile.svg'
import { ReactComponent as Services } from 'assets/services.svg'
import { ReactComponent as Settings } from 'assets/settings.svg'

type PropsType = {
  iconName: string
}

export const Icon: FC<PropsType> = ({ iconName }) => {
  return (
    <>
      {iconName === 'Profile' && <Profile />}
      {iconName === 'Settings' && <Settings />}
      {iconName === 'Services' && <Services />}
      {iconName === 'Logout' && <Logout />}
    </>
  )
}
