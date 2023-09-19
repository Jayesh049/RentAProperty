import './globals.css'


import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Header1';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';

import ToasterProvider from '@/app/providers/ToasterProvider';
import ClientOnly from '@/app/components/ClientOnly';


import getCurrentUser from '@/app/actions/getCurrentUser';

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font= Nunito({
    subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // we can write full function inside this render function
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          {/* <Modal actionLabel="Submit" title="Hello world" isOpen /> */}
          <ToasterProvider />
          <SearchModal />
          <RentModal /> 
          <RegisterModal />
          <LoginModal /> 
          <Navbar currentUser = {currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-28'>
        {children}
        </div>
        </body>
    </html>
  )
}
