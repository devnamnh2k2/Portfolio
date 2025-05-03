import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

type ButtonSubmitType = {
  disabled?: boolean
  text: string
  loadingText: string
}
const ButtonSubmit = ({ disabled, text, loadingText }: ButtonSubmitType) => {
  const { pending, action, data, method } = useFormStatus()
  return (
    <Button type={'submit'} className='rounded-sm' variant={'default'} disabled={disabled || pending}>
      {<Send className='stroke-white' />}
      {pending ? loadingText : text}
    </Button>
  )
}

export default ButtonSubmit
