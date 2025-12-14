import Navbar from '@/components/Navbar.jsx';
import Head from 'next/head';
import { Poppins } from "next/font/google";
import Footer from '@/components/Footer.jsx'

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
        <body className={poppins.className}>
            <div className='w-full min-h-screen flex flex-col'>
                <Navbar />
                <main className='w-full flex-1 flex flex-col items-center'>
                    {children}
                </main>
                <Footer />
            </div>
        </body>
    </html>
    );
}

export default RootLayout
