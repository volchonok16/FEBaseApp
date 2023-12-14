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
    <div className="container py-4 px-3 mx-auto">
      <section className={css.authLayout__wrapper}>
        <ErrorBoundary>
          <AuthForm />
        </ErrorBoundary>
      </section>
    </div>
  )
}
