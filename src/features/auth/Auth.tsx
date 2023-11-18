// import { Navigate } from 'react-router-dom'

import css from './auth.module.scss'
import { AuthForm } from './components/authForm/MyAuthForm'

// import { isLogged } from './model/authReducer'

// import { useAppSelector } from '../../hooks/useAppSelector'

export const AuthLayout = () => {
  // const isLoggedIn = useAppSelector(isLogged)

  // if (isLoggedIn) {
  //   return <Navigate to={`${ORDERS}/${DATA_PREPARATION_TAB}`} />
  // }

  return (
    <section className={css.authLayout__wrapper}>
      <AuthForm />
    </section>
  )
}
