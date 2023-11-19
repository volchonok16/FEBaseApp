import { z } from 'zod'

export const signInSchema = z.object({
  username: z.string().email('Адрес не валидный').trim(),
  password: z
    .string()
    .trim()
    .min(8, 'Минимальное количество символов 8')
    .max(16, 'Максимальное количество символов 16')
    .regex(
      /^[A-Za-z0-9!"$%&'()+,-./:;<=>?@[\]^_{}|~`]+$/,
      'Пароль может состоять только из латинских букв и (!"$%&\'()+,-./:;<=>?@[]^_{|}~`) символов',
    ),
})

export type SignInData = z.infer<typeof signInSchema>
