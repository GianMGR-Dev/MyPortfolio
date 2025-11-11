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
                <h2 className={`text-white font-semibold z-[2] text-8xl lg:text-7xl ${poppins.className}`}>Gian</h2>
                <h2 className={`text-white font-semibold z-[2] text-8xl lg:text-7xl ${poppins.className} after:content-[''] after:block after:w-32 after:h-1.5 after:rounded-full after:bg-[var(--terciary-color)] after:mt-6`}>Gutierrez.</h2>
            </div>
            <Image className='absolute z-[-1] right-0 top-50 lg:w-[380px] lg:l-[380px] xl:w-[450px] xl:l-[450px] 2xl:w-[520px] 2xl:l-[520px]' width={420} height={420} src="/giangutierrez-cartoon-without-background2.png" alt="Gian Gutierrez" />
            <SocialNetworks  />
        </div>
    )
}

export default FirstCard;