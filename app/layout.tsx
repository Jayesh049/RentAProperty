import './globals.css'

import { Nunito } from "next/font/google";

import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import ToasterProvider from './providers/ToasterProvider'
// import Modal from './components/modals/Modal';

import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';

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
