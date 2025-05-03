import React from 'react'
import { LabelType } from '@/types/label'
import { Input } from '@/components/ui/input'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

interface Props<TName extends string> extends Omit<LabelType & React.ComponentProps<'input'>, 'input'> {
  form: any
  placeholder?: string
  description?: string
  name: TName
}

const InputField = <TName extends string>(props: Props<TName>) => {
  const { form, placeholder, description, label, required, htmlFor, name, ...rest } = props
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label} {required && <span className={'text-red-500'}>*</span>}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...rest} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputField
