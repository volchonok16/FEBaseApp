import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  LoginResponseDataType,
  // NewPasswordDataType,
} from './types'

import { SignInData } from 'features/auth/validation'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://adjnatec.ru:4001/api',
    baseUrl: 'https://4e977b58a9d176848516ced5455ade93.serveo.net',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    // вход в приложение
    login: builder.mutation<LoginResponseDataType, SignInData>({
      query: (formData) => {
        return {
          method: 'POST',
          url: `auth/login`,
          body: formData,
        }
      },
    }),

    // // выход из приложения
    // logout: builder.mutation<unknown, void>({
    //   query: () => {
    //     return {
    //       method: 'POST',
    //       url: `auth/logout`,
    //     }
    //   },
    // }),
    // // смена пароля
    // changePassword: builder.mutation<unknown, NewPasswordDataType>({
    //   query: (newPassword) => {
    //     return {
    //       method: 'POST',
    //       url: `auth/new-password`,
    //       body: newPassword,
    //     }
    //   },
    // }),
  }),
})

export const { useLoginMutation } = authApi
