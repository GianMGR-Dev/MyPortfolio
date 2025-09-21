import Image from 'next/image'
import gianLogo from '../../public/logos/gian-logo-without-background3.webp';
import SocialNetworks from './SocialNetworks';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const FirstCard = () => {
    return (
        <div className={`relative z-[2] flex flex-col w-1/2 h-full justify-center items-start gap-16 p-10`}>
            <div>
                <Link
                href={"/"}>
                <Image
                    src={gianLogo}
                    alt="Gian Logo"
                    width={84}
                    height={84}
                />
                </Link>
                
            </div>
            <div>
                <h2 className={`text-white font-semibold z-[2] drop-shadow-lg text-8xl ${poppins.className}`}>Gian</h2>
                <h2 className={`text-white font-semibold z-[2] text-8xl ${poppins.className} after:content-[''] after:block after:w-32 after:h-1.5 after:rounded-full after:bg-[var(--terciary-color)] after:mt-6`}>Gutierrez.</h2>
            </div>
            <SocialNetworks  />
        </div>
    )
}

export default FirstCard;