"use client";
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Logo from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import { HeaderData, headerMockData, SubMenuItem } from '@/mock/header.mock';
import { ChevronDown, Copy, Settings } from 'lucide-react';
import React, { cloneElement } from 'react';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Header = ({ data = headerMockData }: { data?: HeaderData }) => {

    return (
        <header className='w-full'>
            <div className='flex items-center justify-between gap-3 h-16'>
                {/* Logo */}
                <Logo />
                {/* navbar */}
                <nav className='flex-grow flex space-x-1'>
                    {
                        data.navItems.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.label === 'More' ? (
                                    <div className='relative'>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button className={cn(item.isActive && 'bg-accent-foreground', 'rounded-md')} variant={'ghost'}>
                                                    {item.label}
                                                    <ChevronDown className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-96" align='end'>
                                                {data.subMenu?.map((item, index) => (
                                                    <DropdownMenuItem key={index} className="p-0 focus:bg-transparent hover:bg-transparent cursor-pointer">
                                                        <CardItem {...item} />
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                ) : (
                                    <Button className={cn('rounded-md', item.isActive && 'bg-accent')} variant={'ghost'} >
                                        {item.label}
                                    </Button>

                                )}
                            </React.Fragment>
                        ))
                    }
                </nav>
                {/* setting */}
                <div className=''>
                    <DialogSetting />
                </div>
            </div>
        </header>
    );
};

const CardItem: React.FC<SubMenuItem> = ({ title, description, icon }) => {
    return (
        <div className="flex items-start p-4 space-x-4 rounded-md hover:bg-gray-100 transition-colors">
            <div className="p-2  rounded-md text-gray-700 flex-shrink-0">
                {cloneElement(icon, { className: '!w-6 !h-6' })}
            </div>
            <div>
                <h6 className="font-medium text-gray-900">{title}</h6>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};

const DialogSetting = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size='icon' className='rounded-md' variant={'ghost'}>
                    {<Settings />}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue="https://ui.shadcn.com/docs/installation"
                            readOnly
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3 rounded-md">
                        <span className="sr-only">Copy</span>
                        <Copy />
                    </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" className='rounded-md'>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
export default Header;