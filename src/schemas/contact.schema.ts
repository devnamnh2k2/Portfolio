import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, 'Trường này không được bỏ trống'),
  email: z.string().min(1, 'Trường này không được bỏ trống'),
  messages: z.string().min(1, 'Trường này không được bỏ trống')
})

export type contactSchemaType = z.infer<typeof contactSchema>
