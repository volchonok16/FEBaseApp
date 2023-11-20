import { isRejectedWithValue } from '@reduxjs/toolkit'

import type { Middleware } from '@reduxjs/toolkit'

export const errorLoggerMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn(action)
    const statusCode = action.payload?.status
    switch (statusCode) {
      case 401: {
        alert('Ошибка авторизации. Проверьте логин и пароль')
        break
      }
      case 'FETCH_ERROR': {
        alert('Не проходит запрос на сервер')
        break
      }
      default: {
        alert('Произошла ошибка. Попробуйте ещё раз')
        break
      }
    }
  }
  return next(action)
}
