import { z } from 'zod'

export const modalFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, 'Пароль должен содержать не менее 8-и символов')
      .max(20, 'Пароль должен содержать не более 20-и символов'),
    newPassword: z
      .string()
      .trim()
      .min(8, 'Пароль должен содержать не менее 8-и символов')
      .max(20, 'Пароль должен содержать не более 20-и символов')
      .optional(),
    confirmNewPassword: z
      .string()
      .trim()
      .min(8, 'Пароль должен содержать не менее 8-и символов')
      .max(20, 'Пароль должен содержать не более 20-и символов')
      .optional(),
    newTel: z
      .string()
      .min(1, 'Поле должно быть заполнено')
      .refine(
        (value) => /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/.test(value),
        'Номер телефона должен соответствовать формату +7-987-654-32-10',
      )
      .optional(),
    confirmNewTel: z
      .string()
      .min(1, 'Поле должно быть заполнено')
      .refine(
        (value) => /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/.test(value),
        'Номер телефона должен соответствовать формату +7-987-654-32-10',
      )
      .optional(),
    newEmail: z
      .string()
      .trim()
      .min(1, 'Поле должно быть заполнено')
      .email({ message: 'Должен быть валидный адрес почты' })
      .optional(),
    confirmNewEmail: z
      .string()
      .trim()
      .min(1, 'Поле должно быть заполнено')
      .email({ message: 'Должен быть валидный адрес почты' })
      .optional(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Значения нового пароля не совпадают',
    path: ['confirmNewPassword'],
  })
  .refine((data) => data.newTel === data.confirmNewTel, {
    message: 'Значения нового номера телефона не совпадают',
    path: ['confirmNewTel'],
  })
  .refine((data) => data.newEmail === data.confirmNewEmail, {
    message: 'Значения нового адреса электронной почты не совпадают',
    path: ['confirmNewEmail'],
  })
