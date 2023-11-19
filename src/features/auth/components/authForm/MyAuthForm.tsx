import { zodResolver } from '@hookform/resolvers/zod'

import { useState, FC } from 'react'

import { useForm } from 'react-hook-form'

import css from './authForm.module.scss'

import eyeClose from 'assets/eyeCloseIcon.svg'
import eyeOpen from 'assets/eyeOpenIcon.svg'
import { useLoginMutation } from 'features/auth/api/api'
import { LoginResponseDataType } from 'features/auth/api/types'
import { signInSchema, SignInData } from 'features/auth/validation'

export const AuthForm: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const [login, { isLoading, isError: isAuthError }] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
  })

  const onClickSubmitHandler = async (data: SignInData) => {
    try {
      await login(data)
        .unwrap()
        .then((res: LoginResponseDataType) => {
          localStorage.setItem('token', res?.accessToken)
        })
    } catch (err) {
      console.error('LoginError:', err)
    }
  }

  return (
    <section>
      <form
        className={css.authForm__wrapper}
        onSubmit={handleSubmit(onClickSubmitHandler)}
      >
        <h3 className={css.authForm__title}>Авторизация</h3>

        <div className={css.authForm__inputBlock_wrapper}>
          <div className={css.authForm__input_wrapper}>
            <input
              className={
                isAuthError
                  ? `${css.authForm__input} ${css.authForm__input__error}`
                  : css.authForm__input
              }
              type="text"
              id="username"
              {...register('username')}
            />
            <label className={css.authForm__input_label} htmlFor="username">
              Логин
            </label>
          </div>
          {errors.username && (
            <p className={css.authForm__input_message}>
              {errors.username.message}
            </p>
          )}
          <div className={css.authForm__input_wrapper}>
            <input
              className={
                isAuthError
                  ? `${css.authForm__input} ${css.authForm__input__error}`
                  : css.authForm__input
              }
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              {...register('password')}
            />

            <label className={css.authForm__input_label} htmlFor="password">
              Пароль
            </label>

            <div
              className={css.authForm__input_eyeBtn}
              onClick={() => {
                setIsShowPassword(!isShowPassword)
              }}
            >
              {isShowPassword ? (
                <img src={eyeOpen} alt="eye open" />
              ) : (
                <img src={eyeClose} alt="eye close" />
              )}
            </div>
          </div>
          {errors.password && (
            <p className={css.authForm__input_message}>
              {errors.password.message}
            </p>
          )}
          {isAuthError && (
            <div className={css.authForm__input_message}>
              <span
                style={{
                  color: 'red',
                  display: 'inline-block',
                  marginTop: '0.5rem',
                }}
              >
                Неверный логин или пароль!
              </span>
            </div>
          )}
        </div>

        <button
          className={css.authForm__button}
          type="submit"
          disabled={!isValid}
        >
          ВХОД
        </button>
        {isLoading && <div>Загрузка ...</div>}
      </form>
    </section>
  )
}
