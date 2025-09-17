import FirstCard from '@/components/FirstCard.jsx';
import Image from 'next/image';


const HomePage = () => {
  return (
    <div className='relative w-full h-full'>
      <FirstCard />
      <Image className='absolute z-[-1] top-30 left-110' width={450} height={450} src="/giangutierrez-cartoon-without-background2.png" alt="" />
    </div>
  )
}


export default HomePage;