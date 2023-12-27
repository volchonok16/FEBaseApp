import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from './errorPage/ErrorPage'
import { AUTH, MAIN_PAGE, OWNER_PROFILE } from './paths'

import { App } from 'app/MyApp'
import { AuthLayout } from 'features/auth/Auth'
import { OwnerProfile } from 'features/ownerProfile/OwnerProfile'

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    Component: App,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: OWNER_PROFILE,
        Component: OwnerProfile,
      },
    ],
  },
  {
    path: AUTH,
    Component: AuthLayout,
  },
])
