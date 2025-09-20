import FirstCard from '@/components/FirstCard.jsx';
import SecondCard from '@/components/SecondCard';
import Image from 'next/image';

const HomePage = () => {
    return (
    <div className='relative w-full h-full flex flex-row justify-center items-center gap-2'>
        <FirstCard />
        <Image className='absolute m-auto mr-90 lg:w-[450px] lg:l-[450px] xl:w-[500px] xl:l-[500px]' width={420} height={420} src="/giangutierrez-cartoon-without-background2.png" alt="Gian Gutierrez" />
        <SecondCard />
    </div>
    )
}

export default HomePage;