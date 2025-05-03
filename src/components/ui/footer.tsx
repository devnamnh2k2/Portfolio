import React from 'react'
import { CommonComponents } from '@/components/common-components'
import Link from 'next/link'

interface Props {
  data?: any
}
const Footer = ({ data = mockFooter }: Props) => {
  return (
    <footer>
      <CommonComponents.SubContainer className={''}>
        <hr className="mx-auto mb-5 w-full border border-neutral-200 dark:border-neutral-800" />
        <p className={'mb-4 text-md font-medium text-neutral-700 opacity-50 dark:text-neutral-300'}>{data.titleFooter}</p>
        <div className={'flex justify-between gap-4 pb-3'}>
          <div className={'text-neutral-700 dark:text-neutral-400'}>
            <p className={'text-md mt-1 mb-2 font-bold text-neutral-800 dark:text-white'}>Important Links</p>
            <ul>
              {mockFooter.MoreLinks.map((link, index) => (
                <li key={index} className={'text-md mb-0.5 font-normal hover:underline hover:underline-offset-1'}>
                  <Link href={'#link'} className={''}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={'text-neutral-700 dark:text-neutral-400'}>
            <p className={'text-md mt-1 mb-2 font-bold text-neutral-800 dark:text-white'}>Get in Touch</p>
            <ul>
              {Object.values(mockFooter.contactMe).map((link, index) => (
                <li key={index} className={'text-md mb-0.5 font-normal'}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className={'text-neutral-700 dark:text-neutral-400'}>
            <p className={'text-md mt-1 mb-2 font-bold text-neutral-800 dark:text-white'}>Connect</p>
            <ul>
              {mockFooter.connect.map((link, index) => (
                <li key={index} className={'text-md mb-0.5 font-normal hover:underline hover:underline-offset-1'}>
                  <Link href={'#link'} className={''}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CommonComponents.SubContainer>
    </footer>
  )
}

export default Footer

const mockFooter = {
  titleFooter: 'Copyright © 2021 - 2025 NamNH',
  contactMe: {
    email: 'ngohuunam2002@gmail.com',
    address: 'Ha noi, Viet Nam'
  },
  connect: ['GitHub', 'Twitter', 'Facebook'],
  MoreLinks: ['Home', 'My work', 'Href1', 'Href3']
}
