import 'common/styles/index.scss'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes/router'
import { store } from 'app/model/store'
import { StrictMode, Suspense } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h2>Loading ....</h2>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
)

reportWebVitals()
