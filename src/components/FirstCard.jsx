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
        <div className={`relative z-[2] flex flex-col w-1/2 h-full justify-center items-start gap-16 p-10 `}>
            <div>
                <Link
                href={"/"}>
                <Image
                    src={gianLogo}
                    alt="Gian Logo"
                    width={84}
                    height={84}
                    className='lg:w-[84px] lg:l-[84px] md:w-[64px] md:*:h-[64px]'
                />
                </Link>
            </div>
            <div>
                <h2 className={`text-white font-semibold z-[2] text-6xl lg:text-7xl xl:text-7xl ${poppins.className}`}>Gian</h2>
                <h2 className={`text-white font-semibold z-[2] text-6xl lg:text-7xl xl:text-7xl ${poppins.className} after:content-[''] after:block after:w-32 after:h-1.5 after:rounded-full after:bg-[var(--terciary-color)] after:mt-6`}>Gutierrez.</h2>
            </div>
            <Image className='absolute z-[-1] right-[-10] bottom-[-10] lg:w-[330px] lg:l-[330px] xl:w-[400px] xl:l-[400px] 2xl:w-[470px] 2xl:l-[470px]' width={420} height={420} src={gianImage} alt="Gian Gutierrez" />
            <SocialNetworks  />
        </div>
    )
}

export default FirstCard;