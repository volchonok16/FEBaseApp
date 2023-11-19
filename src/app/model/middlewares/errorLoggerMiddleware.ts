import { isRejectedWithValue } from '@reduxjs/toolkit'

import type { Middleware } from '@reduxjs/toolkit'

export const errorLoggerMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn(
      action.payload?.data?.message?.message ||
        'Произошла ошибка. Повторите попытку.',
    )
  }
  return next(action)
}
