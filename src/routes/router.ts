import { createBrowserRouter } from 'react-router-dom'

import { App } from './../app/MyApp'

import { AuthLayout } from './../features/auth/Auth'

import { ErrorPage } from './errorPage/ErrorPage'
import { AUTH, MAIN_PAGE } from './paths'

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
])
