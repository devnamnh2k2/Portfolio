'use client'
import * as React from 'react'
import { ChevronsUpDown, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const renderPlacHoder = () => {
    if (theme === 'light') {
      return <Sun className='transition-al h-[1.2rem] w-[1.2rem] scale-100 rotate-0' />
    } else if (theme === 'dark') {
      return <Moon className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all' />
    } else {
      return <>{'Chọn chế độ'}</>
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' role='combobox' className='w-full rounded-sm'>
          {renderPlacHoder()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' alignOffset={10}>
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
