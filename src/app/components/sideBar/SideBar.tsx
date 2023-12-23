import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import css from './sideBar.module.scss'

import { ReactComponent as Logout } from 'assets/logout.svg' // нужно импортировать как компоненту, чтобы менять цвет иконки
import { ReactComponent as Profile } from 'assets/profile.svg'
import { ReactComponent as Services } from 'assets/services.svg'
import { ReactComponent as Settings } from 'assets/settings.svg'

type PropsType = {
  setIsDarkTheme: (isDarkTheme: boolean) => void
  isDarkTheme: boolean
}

export const SideBar: FC<PropsType> = ({ setIsDarkTheme, isDarkTheme }) => {
  const menuItems = [
    {
      id: 1,
      title: 'Профиль',
      svg: 'Profile',
      path: 'owner',
    },
    {
      id: 2,
      title: 'Настройки',
      svg: 'Settings',
      path: '/',
    },
    {
      id: 3,
      title: 'Сервисы',
      svg: 'Services',
      path: '/',
    },
  ]
  const [isMenu, setIsMenu] = useState(true)
  const [activeItem, setActiveItem] = useState<null | number>()

  const navigate = useNavigate()

  const hideMenu = () => {
    setIsMenu((prevState) => !prevState)
  }

  const handleActiveItem = (id: null | number, path: string) => {
    setActiveItem(id)
    navigate(path)
  }

  return (
    <>
      <div className={`col-auto`}>
        <nav className="d-flex flex-column align-items-stretch p-3 rounded-4 bg-body h-100">
          <div
            role="button"
            className="d-flex flex-column align-items-start h-25 me-md-auto text-body text-decoration-none"
          >
            <span
              className={`${css.logo} mx-1 d-none 
              ${isMenu ? 'd-lg-inline' : ''}`}
            >
              АТП-Онлайн
            </span>
            <span
              className={`${css.name} mx-1 d-none text-body 
              ${isMenu ? 'd-lg-inline' : ''}`}
            >
              Личный кабинет
            </span>
          </div>
          <ul className="nav nav-pills flex-column align-items-start" id="menu">
            {menuItems.map((item) => (
              <li
                className="nav-item"
                key={item.id}
                onClick={() => handleActiveItem(item.id, item.path)}
              >
                <div
                  role="button"
                  className={`nav-link
                  ${activeItem === item.id ? 'active' : ''} 
                  align-middle p-1 my-1`}
                >
                  <div className={css.icon}>
                    {item.svg === 'Profile' && <Profile />}
                    {item.svg === 'Settings' && <Settings />}
                    {item.svg === 'Services' && <Services />}
                  </div>
                  <span
                    className={
                      'mx-2 d-none text-body ' + (isMenu ? 'd-lg-inline' : '')
                    }
                  >
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-2">
            <div
              role="button"
              className="d-flex p-1 my-1 text-body text-decoration-none"
              onClick={() => handleActiveItem(null, '/')}
            >
              <div className={css.icon}>
                <Logout />
              </div>

              <span className={'mx-2 d-none ' + (isMenu ? 'd-lg-inline' : '')}>
                Выход
              </span>
            </div>
          </div>
          <div className="mt-3 pb-2">
            <div className={'mx-2 d-none ' + (isMenu ? 'd-lg-inline' : '')}>
              <input
                type="checkbox"
                id="theme"
                name="theme"
                onChange={() => setIsDarkTheme(!isDarkTheme)}
              />
              <label htmlFor="theme"> Темная тема</label>
            </div>
          </div>
        </nav>
      </div>
      <div className={css.arrow_wrapper}>
        <div className={isMenu ? css.curl_inside : css.curl_outside}>
          <div className={css.curl} onClick={hideMenu}></div>
        </div>
      </div>
    </>
  )
}
