import { Navigate, Outlet } from 'react-router-dom'

import { getToken } from './../utils/getToken'

import css from './app.module.scss'

import { AUTH } from '../routes/paths'

export const App = () => {
  const isToken = getToken()

  if (!isToken) {
    return <Navigate to={AUTH} />
  }

  return (
    <div className={css.app__wrapper}>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
