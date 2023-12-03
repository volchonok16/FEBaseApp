import { zodResolver } from '@hookform/resolvers/zod'

import { useState, FC, useCallback } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import { useForm } from 'react-hook-form'

import { z } from 'zod'

import css from './authForm.module.scss'

import eyeClose from 'assets/eyeCloseIcon.svg'
import eyeOpen from 'assets/eyeOpenIcon.svg'
import { useLoginMutation, useSignUpMutation } from 'features/auth/api/api'
import { LoginDataType, LoginResponseDataType } from 'features/auth/api/types'
import { signInSchema } from 'features/auth/validation'

export const AuthForm: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowPasswordField, setIsShowPasswordField] = useState(false)

  const [login, { isLoading: isAuthLoading, isError: isAuthError }] =
    useLoginMutation()
  const [signUp, { isLoading: isSignUpLoading }] = useSignUpMutation()

  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInDataType>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
  })

  const onClickSubmitHandler = useCallback(
    async (data: SignInDataType) => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available')
        return
      }
      const reCaptchaToken = await executeRecaptcha('auth')
      console.log('reCaptchaToken: ', reCaptchaToken)
      try {
        if (data.password) {
          await login(data as LoginDataType)
            .unwrap()
            .then((res: LoginResponseDataType) => {
              localStorage.setItem('token', res.accessToken)
            })
        } else {
          await signUp(data)
            .unwrap()
            .then((res) => {
              console.log(res?.password)
              setIsShowPasswordField(true)
            })
        }
      } catch (err) {
        console.error('LoginError:', err)
      }
    },
    [executeRecaptcha],
  )

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
              id="email"
              {...register('email')}
            />
            <label className={css.authForm__input_label} htmlFor="email">
              Email
            </label>
          </div>
          {errors.email && (
            <p className={css.authForm__input_message}>
              {errors.email.message}
            </p>
          )}
          {isShowPasswordField && (
            <>
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
              <div className={css.authForm__password_text}>
                Введите пароль. При первом входе в приложение введите пароль,
                указанный в сообщении, которое пришло Вам на почту.
              </div>
            </>
          )}
        </div>

        <button
          className={css.authForm__button}
          type="submit"
          disabled={!isValid}
        >
          ВХОД
        </button>
        {(isAuthLoading || isSignUpLoading) && <div>Загрузка ...</div>}
      </form>
    </section>
  )
}

type SignInDataType = z.infer<typeof signInSchema>
