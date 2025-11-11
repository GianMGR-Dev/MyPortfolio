import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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