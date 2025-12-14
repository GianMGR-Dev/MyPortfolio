import FirstCard from '@/components/FirstCard.jsx';
import SecondCard from '@/components/SecondCard';

const HomePage = () => {

    return (
        <div className='relative w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <FirstCard />
            <SecondCard />
        </div>
    )
}

export default HomePage;