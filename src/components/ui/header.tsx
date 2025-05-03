'use client'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Logo from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import { HeaderData, headerMockData, SubMenuItem } from '@/mock/header.mock'
import { ArrowRight, ChevronDown, Copy, Send, Settings, SunMoon } from 'lucide-react'
import React, { cloneElement } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ModeToggle } from '@/components/ui/mode-toggle'
const Header = ({ data = headerMockData }: { data?: HeaderData }) => {
  return (
    <header className='w-full'>
      <div className='flex h-16 items-center justify-between gap-3'>
        {/* Logo */}
        <Logo />
        {/* navbar */}
        <nav className='flex flex-grow space-x-1'>
          {data.navItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.label === 'More' ? (
                <div className='relative'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className={cn(item.isActive && 'bg-accent-foreground', 'rounded-md')} variant={'ghost'}>
                        {item.label}
                        <ChevronDown className='h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-96' align='end'>
                      {data.subMenu?.map((item, index) => (
                        <DropdownMenuItem
                          key={index}
                          className='cursor-pointer p-0 hover:bg-transparent focus:bg-transparent'
                        >
                          <CardItem {...item} />
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <Button className={cn('rounded-md', item.isActive && 'bg-accent')} variant={'ghost'}>
                  {item.label}
                </Button>
              )}
            </React.Fragment>
          ))}
        </nav>
        {/* setting */}
        <div className=''>
          <DialogSetting />
        </div>
      </div>
    </header>
  )
}

const CardItem: React.FC<SubMenuItem> = ({ title, description, icon }) => {
  return (
    <div className='flex items-start space-x-4 rounded-md p-4 transition-colors hover:bg-gray-100'>
      <div className='flex-shrink-0 rounded-md p-2 text-gray-700'>{cloneElement(icon, { className: '!w-6 !h-6' })}</div>
      <div>
        <h6 className='font-medium text-gray-900'>{title}</h6>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

const DialogSetting = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='icon' className='group rounded-md' variant={'ghost'}>
          {<Settings className='transition-all ease-linear group-hover:rotate-180' />}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md text-primary'>
        <DialogHeader>
          <DialogTitle>Setting</DialogTitle>
          <DialogDescription>
            You can customize your preferences here, such as the website theme or visual decorations.
          </DialogDescription>
        </DialogHeader>
        <div className=''>
          <div
            className={
              'flex w-full cursor-auto items-center py-3  gap-3 text-base text-neutral-800 select-none dark:text-white text-primary'
            }
          >
              <SunMoon />
              {'Theme'}
              <div className={'ml-auto'}>
                  <ModeToggle/>
              </div>
          </div>
        </div>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button type='button' className='rounded-sm text-primary' variant={'secondary'}>
              Close
              {<ArrowRight className='stroke-primary' />}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default Header
