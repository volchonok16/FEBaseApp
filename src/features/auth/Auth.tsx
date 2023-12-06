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
        <div>
          <h1>Hello, Bootstrap and Webpack!</h1>
          <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            Primary button
          </div>
        </div>
      </section>
    </div>
  )
}
