import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// import { getToken } from './../utils/getToken'

// import css from './app.module.scss'

import { SideBar } from 'app/components/sideBar/SideBar'

// import { AUTH } from '../routes/paths'

export const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  // const isToken = getToken()

  // if (!isToken) {
  //   return <Navigate to={AUTH} />
  // }

  return (
    <div
      data-bs-theme={isDarkTheme ? 'custom' : 'light'}
      className="container-fluid p-3 pe-0 m in-vw-100 vh-100 text-body bg-body-secondary"
    >
      <div className="row flex-nowrap h-100 g-0">
        <SideBar setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        <main className="col overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
