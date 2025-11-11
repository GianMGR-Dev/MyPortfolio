import FirstCard from '@/components/FirstCard.jsx';
import SecondCard from '@/components/SecondCard';

const HomePage = () => {

    return (
    <div className='relative w-full h-full flex flex-row justify-center items-center gap-2'>
        <FirstCard />
        <SecondCard />
    </div>
    )
}

export default HomePage;