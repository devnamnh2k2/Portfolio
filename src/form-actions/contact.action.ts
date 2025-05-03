'use server'

import { contactSchema, contactSchemaType } from '@/schemas/contact.schema'

export async function getContacts(values: contactSchemaType): Promise<any> {
  const rawFormData = {
    name: values.name,
    email: values.email,
    messages: values.messages
  }
  const validateField = contactSchema.safeParse(rawFormData)
  if (!validateField.success) {
    return {
      data: { ...rawFormData },
      messages: 'error field validation',
      disabled: true,
      zodErrors: validateField.error.flatten().fieldErrors
    }
  }
  // mutate data
  // call api( await GRAPHQL)
  // revalidate cache
  return {
    data: { ...rawFormData },
    messages: 'success'
  }
}
