'use client'
import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { contactSchema, contactSchemaType } from '@/schemas/contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '@/components/common-components/form/input/input-field'
import TextAreaField from '@/components/common-components/form/text-area/text_area-field'
import { getContacts } from '@/form-actions/contact.action'
import ButtonSubmit from '@/components/ui/button-submit'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
// import { useToast } from "@/hook/use-toast"

const ContactSection = () => {
  const { toast } = useToast()
  const form = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      messages: ''
    }
  })
  const onSubmit =  async (value: contactSchemaType)=> {
    debugger
    try {
        const result = await getContacts(value)
        toast({
          title: 'Gửi yêu cầu tới NamNH thành công',
          description: "Friday, February 10, 2023 at 5:57 PM",
        })

        // if (result.success) {
        // }
      } catch (error: unknown) {

      }
  }

  return (
    <section className={'rounded-sm bg-gray-50 p-8'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, (error) => {
          console.log('error',error)
        })}>
          <div className={'flex flex-col gap-y-3'}>
            <div className={'flex gap-3'}>
              <div className={'flex-grow-1'}>
                <InputField
                  form={form}
                  name={'name'}
                  type={'text'}
                  placeholder={'Tên của bạn'}
                  label={'Name'}
                  required
                />
              </div>
              <div className={'flex-grow-1'}>
                <InputField
                  form={form}
                  name={'email'}
                  type={'email'}
                  placeholder={'Email của bạn'}
                  label={'Email'}
                  required
                />
              </div>
            </div>
            <div className={''}>
              <TextAreaField
                form={form}
                name={'messages'}
                placeholder={'Xin chào NamNH, Tôi muốn nói với bạn rằng ...'}
                label={'Messages'}
                required
              />
            </div>
            <div>{/*{state.message} {`${isPending}`}*/}</div>
            <div className={'text-end'}>
              <ButtonSubmit text={'Gửi'} loadingText={'Đang Gửi ...'} disabled={form.formState.isSubmitting}/>
            </div>
          </div>
        </form>
      </Form>
    </section>
  )
}

export default ContactSection
