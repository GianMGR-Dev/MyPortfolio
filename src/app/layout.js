import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className='m-0 p-0 '>
      <body>
        <main className='w-full h-dvh flex flex-col items-center justify-between'>
          {children}
        </main>
      </body>
    </html>
  );
}

export default  RootLayout 