import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  LoginDataType,
  LoginResponseDataType,
  SignUpDataType,
  SignUpResDataType,
} from './types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://adjnatec.ru:4300',
    // baseUrl: 'https://4e977b58a9d176848516ced5455ade93.serveo.net',

    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      if (!token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    // регистрация нового пользователя
    signUp: builder.mutation<SignUpResDataType | null, SignUpDataType>({
      query: (formData) => {
        return {
          method: 'POST',
          url: `auth/authenticateEmail`,
          body: formData,
        }
      },
    }),
    // вход в приложение
    login: builder.mutation<LoginResponseDataType, LoginDataType>({
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

export const { useLoginMutation, useSignUpMutation } = authApi
