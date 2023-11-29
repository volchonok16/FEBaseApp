import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Адрес не валидный').trim(),
  password: z.string().optional(),
})
