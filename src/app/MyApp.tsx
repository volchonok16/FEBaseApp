import { Outlet } from 'react-router-dom'

// import { getToken } from './../utils/getToken'

// import css from './app.module.scss'

import { SideBar } from 'app/components/sideBar/SideBar'

// import { AUTH } from '../routes/paths'

export const App = () => {
  // const isToken = getToken()

  // if (!isToken) {
  //   return <Navigate to={AUTH} />
  // }

  return (
    <div className="container-fluid p-3 min-vw-100 vh-100 bg-light">
      <div className="row flex-nowrap h-100 g-0">
        <SideBar />
        <main className="col py-3">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
