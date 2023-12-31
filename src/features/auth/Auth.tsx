// import { Navigate } from 'react-router-dom'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

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
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.REACT_APP_SITE_KEY as string}
          >
            <AuthForm />
          </GoogleReCaptchaProvider>
        </ErrorBoundary>
      </section>
    </div>
  )
}
