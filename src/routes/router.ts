import { createBrowserRouter } from 'react-router-dom'

import { App } from './../app/MyApp'

import { AuthLayout } from './../features/auth/Auth'

import { ErrorPage } from './errorPage/ErrorPage'
import { AUTH, MAIN_PAGE, YANDEX_AUTH } from './paths'

import { YandexAuth } from 'features/auth/components/yandexAuth/YandexAuth'

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    Component: App,
    ErrorBoundary: ErrorPage,
  },
  {
    path: AUTH,
    Component: AuthLayout,
  },
  {
    path: YANDEX_AUTH,
    Component: YandexAuth,
  },
])
