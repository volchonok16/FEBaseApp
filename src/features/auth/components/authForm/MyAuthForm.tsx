import eyeClose from 'assets/eyeCloseIcon.svg'
import eyeOpen from 'assets/eyeOpenIcon.svg'
import { useLoginMutation } from 'features/auth/api/api'
import { LoginDataType } from 'features/auth/api/types'
import { useState, FC } from 'react'

import { useForm } from 'react-hook-form'

import css from './authForm.module.scss'

export const AuthForm: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const [login, { isLoading, isError: isAuthError }] = useLoginMutation()

  const { register, handleSubmit } = useForm<LoginDataType>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  const onClickSubmitHandler = async (data: LoginDataType) => {
    try {
      await login(data)
        .unwrap()
        .then((res) => {
          console.log(res.accessToken)
          localStorage.setItem('token', res.accessToken)
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
              placeholder=" "
              {...register('username')}
            />

            <label className={css.authForm__input_label} htmlFor="username">
              Логин
            </label>
          </div>

          <div className={css.authForm__input_wrapper}>
            <input
              className={
                isAuthError
                  ? `${css.authForm__input} ${css.authForm__input__error}`
                  : css.authForm__input
              }
              type={isShowPassword ? 'text' : 'password'}
              id="password"
              placeholder=" "
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

            {isAuthError && (
              <div className={css.authForm__input_message}>
                <span style={{ color: 'red' }}>Неверный логин или пароль!</span>
              </div>
            )}
          </div>
        </div>

        <button className={css.authForm__button} type="submit">
          ВХОД
        </button>
        {isLoading && <div>Загрузка ...</div>}
      </form>
    </section>
  )
}
