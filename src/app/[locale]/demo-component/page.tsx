'use client'
import { CommonComponents } from '@/components/common-components'
import { SVGIcon } from '@/components/icon-svg'
import { Button } from '@/components/ui/button'
import CardLeader from '@/components/ui/card-leader'
import CardNews from '@/components/ui/card-news'
import CardProject from '@/components/ui/card-project'
import React from 'react'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import InputField from '@/components/common-components/form/input/input-field'

const Page = () => {
  const infoMVNO = {
    title: 'E-MVNO',
    description: 'Mạng di động ảo (Mobile Virtual Network Operator - MVNO)',
    logoUrl: 'https://placehold.co/400x400/6A00F5/white',
    category: 'GLOBAL SOLUTION',
    cta: {
      label: 'Chi tiết',
      icon: 'arrow-up-right',
      link: '/services/e-mvno'
    }
  }

  const infoLeader = {
    name: 'Lê Quý',
    title: 'Chairman',
    avatarUrl: '/images/le-quy.png',
    position: 'Chairman',
    dimensions: {
      width: 322,
      height: 378
    }
  }

  const infoNews = {
    type: 'Blog',
    title: 'Sustainable Growth through Economic Marketin.',
    thumbnailUrl: '/images/blog-soccer.jpg',
    publishedAt: '2025-03-15',
    author: 'Harper Evans'
  }

  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.'
    }),
    username2: z.string().min(2, {
      message: 'Username2 must be at least 2 characters.'
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      username2: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <CommonComponents.Container className='pb-24'>
      demo component working!
      <br />
      <br />
      {/* font-size */}
      <CommonComponents.SubContainer className='mx-0 flex flex-col gap-4'>
        <p className='text-5xl font-bold text-red-500'>Font size</p>
        <h1>Font size h1</h1>
        <h2>Font size h2</h2>
        <h3>Font size h3</h3>
        <h4>Font size h4</h4>
        <h5>Font size h5</h5>
        <h6>Font size h6</h6>
        <p>Pharagraph p</p>
      </CommonComponents.SubContainer>
      <br />
      <br />
      {/* button */}
      <CommonComponents.SubContainer className='mx-0 flex w-1/5 flex-col gap-4'>
        <p className='w-full text-5xl font-bold text-red-500'>Button</p>
        <Button variant={'default'} size={'lg'} asChild>
          <p className='text-md'>Primary</p>
        </Button>
        <Button variant={'outline'}>OutLine</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'ghost'}>Ghost</Button>
        <Button variant={'link'}>Link</Button>
        <Button variant={'destructive'}>Destructive</Button>
        <Button variant={'default'} disabled>
          Disabled
        </Button>
        <br />
        <Button variant={'link'}>Xem thêm</Button>
        <Button size='icon' className='rounded-md' variant={'default'}>
          {<SVGIcon.ArrowUpRightUp />}
        </Button>
        <Button variant={'outline'} size={'lg'} asChild>
          <div className='text-white'>
            <p className='text-md leading-8 font-medium'> Tải xuống Profile</p>
            {<SVGIcon.ArrowUpRightUp className='stroke-white' />}
          </div>
        </Button>
        <Button variant={'default'} size={'md'} asChild>
          <div className='text-white'>
            <p className='text-md leading-8 font-medium'> Xem thêm</p>
            {<SVGIcon.ArrowUpRightUp className='stroke-white' />}
          </div>
        </Button>
      </CommonComponents.SubContainer>
      <br />
      <br />
      <CommonComponents.SubContainer>
        <div className='flex items-center gap-8'>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='flex flex-1 items-center justify-center'>
              <CardProject info={infoMVNO} />
            </div>
          ))}
        </div>
      </CommonComponents.SubContainer>
      <br />
      <br />
      <br />
      <CommonComponents.SubContainer>
        <div className='flex items-center gap-8'>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='flex flex-1 items-center justify-center'>
              <CardLeader info={infoLeader} />
            </div>
          ))}
        </div>
      </CommonComponents.SubContainer>
      <br />
      <br />
      <br />
      <CommonComponents.SubContainer>
        <div className='flex items-center gap-8'>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className='flex flex-1 items-center justify-center'>
              <CardNews info={infoNews} />
            </div>
          ))}
        </div>
      </CommonComponents.SubContainer>
      <CommonComponents.SubContainer>
        <h1>Form</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*<FormField control={form.control} name='username2' render={<InputField />} />*/}
            <InputField form={form} name={'username2'} />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </CommonComponents.SubContainer>
    </CommonComponents.Container>
  )
}

export default Page
