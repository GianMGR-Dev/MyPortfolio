import Image from 'next/image'
import gianLogo from '@/assets/logos/gian-logo-without-background3.webp';
import localFont from 'next/font/local';
import SocialNetworks from './SocialNetworks';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const kanitFont = localFont({ src: '../assets/fonts/Kanit-regular.woff2' });

const FirstCard = () => {

    return (
        <div className={`flex flex-col w-1/2 h-full items-start gap-16 p-10 ml-28`}>
            <div>
                <Image
                    src={gianLogo}
                    alt="Gian Logo"
                    width={64}
                    height={64}
                />
            </div>
            <div>
                <h2 className={`text-white font-semibold drop-shadow-lg text-8xl ${poppins.className}`}>Gian</h2>
                <h2 className={`text-white font-semibold text-8xl ${poppins.className} after:content-[''] after:block after:w-32 after:h-1.5 after:bg-[var(--terciary-color)] after:mt-6`}>Gutierrez.</h2>
            </div>
            <SocialNetworks  />
        </div>
    )
}

export default FirstCard;