import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './app/model/store'
import { router } from './routes/router'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <Suspense fallback={<h2>Loading ....</h2>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
  </StrictMode>,
)
