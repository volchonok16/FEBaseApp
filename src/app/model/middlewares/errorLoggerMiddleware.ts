import { isRejectedWithValue } from '@reduxjs/toolkit'

import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

export const errorLoggerMiddleware: Middleware =
  /* eslint-disable */ // 'api' is defined but never used  @typescript-eslint/no-unused-vars
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const statusCode = action.payload?.status
      switch (statusCode) {
        case 401: {
          alert('Ошибка авторизации. Проверьте логин и пароль')
          break
        }
        case 'FETCH_ERROR': {
          alert('Не проходит запрос на сервер. Обратитесь в службу поддержки')
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
