import { Outlet } from 'react-router-dom'

// import { getToken } from './../utils/getToken'

import css from './app.module.scss'

// import { AUTH } from '../routes/paths'

import { SideMenu } from 'app/components/sideMenu/SideMenu'

export const App = () => {
  // const isToken = getToken()

  // if (!isToken) {
  //   return <Navigate to={AUTH} />
  // }

  return (
    <div className={css.app__wrapper}>
      <SideMenu />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
