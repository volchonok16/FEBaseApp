// import { Navigate } from 'react-router-dom'

import css from './auth.module.scss'
import { AuthForm } from './components/authForm/MyAuthForm'

import ErrorBoundary from '../../common/components/ErrorBoundary'

export const AuthLayout = () => {
  // const isLoggedIn = useAppSelector(isLogged)

  // if (isLoggedIn) {
  //   return <Navigate to={`${ORDERS}/${DATA_PREPARATION_TAB}`} />
  // }

  return (
    <section className={css.authLayout__wrapper}>
      <ErrorBoundary>
        <AuthForm />
      </ErrorBoundary>
    </section>
  )
}
