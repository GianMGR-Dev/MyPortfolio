import Navbar from '@/components/Navbar.jsx';
import Head from 'next/head';
import './globals.css'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className='w-full h-dvh flex flex-col items-center justify-between gap-2'>
          {children}
        </main>
      </body>
    </html>
  );
}

export default  RootLayout
