import Image from 'next/image'
import gianLogo from '../../public/logos/gian-logo-without-background3.webp';
import gianImage from '../../public/img/giangutierrez-cartoon-without-background2.png';
import SocialNetworks from './SocialNetworks';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const FirstCard = () => {
    return (
        <div className={`relative z-[2] flex flex-col w-full md:w-1/2 h-full justify-center items-start gap-5 md:gap-16 p-4 pt-2 md:p-10`}>
            <div>
                <Link
                href={"/"}>
                <Image
                    src={gianLogo}
                    alt="Gian Logo"
                    width={84}
                    height={84}
                    className='w-[64px] md:w-[84px]'
                />
                </Link>
            </div>
            <div>
                <h2 className={`text-white font-semibold z-[2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${poppins.className}`}>Gian</h2>
                <h2 className={`text-white font-semibold z-[2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${poppins.className} after:content-[''] after:block after:w-26  after:h-1.5  after:rounded-full after:bg-[var(--terciary-color)] after:mt-6`}>Gutierrez.</h2>
            </div>
            <Image className='absolute z-[-10] right-0 bottom-0 w-[260px] sm:w-[320] md:w-[340px] lg:w-[350px] xl:w-[400px] 2xl:w-[480px]' src={gianImage} alt="Gian Gutierrez" />
            <SocialNetworks  />
        </div>
    )
}

export default FirstCard;