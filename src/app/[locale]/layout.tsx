import { CommonComponents } from '@/components/common-components'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: any }) {
  const { locale } = await params
  const messages = await getMessages()
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <CommonComponents.Container className='max-w-7xl py-4'>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </CommonComponents.Container>
    </NextIntlClientProvider>
  )
}
