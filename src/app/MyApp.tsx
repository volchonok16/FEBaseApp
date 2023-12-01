import { Outlet } from 'react-router-dom'

// import { getToken } from './../utils/getToken'

import css from './app.module.scss'

import { SideBar } from 'app/components/sideBar/SideBar'

// import { AUTH } from '../routes/paths'

export const App = () => {
  // const isToken = getToken()

  // if (!isToken) {
  //   return <Navigate to={AUTH} />
  // }

  return (
    <div className={css.app__wrapper}>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
