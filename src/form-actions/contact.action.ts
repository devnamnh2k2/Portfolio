// 'use server'
// import { contactSchema, contactSchemaType } from '@/schemas/contact.schema'
// export async function getContacts(values: contactSchemaType): Promise<any> {
//   try {
//     const rawFormData = {
//       name: values.name,
//       email: values.email,
//       messages: values.messages
//     }
//     const validateField = contactSchema.safeParse(rawFormData)
//     if (!validateField.success) {
//       throw {
//         name: 'Validation error',
//         rawData: rawFormData,
//         errors: validateField.error.flatten().fieldErrors
//       }
//     }
//     // mutate data
//     // call api( await GRAPHQL)
//     // revalidate cache
//     return {
//       data: { ...rawFormData },
//       messages: 'success'
//     }
//   } catch (error: any) {
//     if (error.name === 'ValidationError') {
//       return {
//         data: error.rawData,
//         messages: 'error field validation',
//         disabled: true,
//         zodErrors: error.errors
//       }
//     }
//     throw new Error(error);
//   }
// }
