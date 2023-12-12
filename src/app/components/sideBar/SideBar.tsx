import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import css from './sideBar.module.scss'

// import { Menu } from 'app/components/menu/Menu'
import logout from 'assets/logout.svg'
import profile from 'assets/profile.svg'
import services from 'assets/services.svg'
import settings from 'assets/settings.svg'

export const SideBar: FC = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Профиль',
      img: profile,
      path: 'owner',
    },
    {
      id: 2,
      title: 'Настройки',
      img: settings,
      path: '/',
    },
    {
      id: 3,
      title: 'Сервисы',
      img: services,
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
  // return (
  //   <div className={css.sideBar_wrapper}>
  //     <div className={css.logo}>АТП-Онлайн</div>
  //     <div className={css.name}>Личный кабинет</div>
  //     <Menu />
  //     <div className={css.logout_wrapper}>
  //       <img src={logout} />
  //       <div className={css.logout_text}>Выход</div>
  //     </div>
  //   </div>
  // )
  return (
    <>
      <div className="col-auto">
        <nav
          className={`d-flex flex-column align-items-stretch p-3 ${css.wrapper} bg-white h-100`}
        >
          <div
            role="button"
            className="d-flex flex-column align-items-start h-25 me-md-auto text-black text-decoration-none"
          >
            <span
              className={`${css.logo} mx-1 d-none 
              ${isMenu ? 'd-lg-inline' : ''}`}
            >
              АТП-Онлайн
            </span>
            <span
              className={`${css.name} mx-1 d-none 
              ${isMenu ? 'd-lg-inline' : ''}`}
            >
              Личный кабинет
            </span>
          </div>
          <ul
            className="nav nav-pills flex-grow-1 flex-column align-items-start"
            id="menu"
          >
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
                  <img src={item.img} className={css.icon} alt={item.title} />
                  <span
                    className={
                      'mx-2 text-black d-none ' + (isMenu ? 'd-lg-inline' : '')
                    }
                  >
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="pb-4">
            <div
              role="button"
              className="d-flex p-1 my-1 text-black text-decoration-none"
              onClick={() => handleActiveItem(null, '/')}
            >
              <img src={logout} alt="logout" className={css.icon} />
              <span className={'mx-2 d-none ' + (isMenu ? 'd-lg-inline' : '')}>
                Выход
              </span>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-auto">
        <button onClick={hideMenu}>Menu</button>
      </div>
    </>
  )
}
