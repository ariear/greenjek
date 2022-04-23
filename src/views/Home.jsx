import {React} from 'react';
import Cari from '../component/Home/Cari'
import Awan from '../component/Home/Awan'
import Price from '../component/Home/Price'
import Transport from '../component/Home/Transport';
import Handling from '../component/Home/Handling';

function Home() {
    
    return (
    <div className='bg-[#FBFCFD]'>
        <img src="/img/blob-back.png" alt="blob" className="absolute bottom-0 left-0" />
        <img src="/img/rightblob.png" className="absolute bottom-0 right-0" alt="rightblob" />
        <div className="flex lg:justify-around min-h-screen items-center relative overflow-hidden">
        <Awan />
        <div>
            <img src="/img/logo-main.png" className="relative z-20 lg:w-[500px] xl:w-[700px] lg:block hidden" alt="logomain" />
        </div>
        <div className="font-jaksel lg:text-left md:text-center lg:w-[425px] px-5 xl:px-0">
            <p className="font-semibold text-3xl md:text-4xl mb-4">Antar Paketmu ke kami !!</p>
            <p className="font-light mb-7 lg:px-0 md:px-7">Jek Express adalah ekpedisi yang ada di indonesia , antar paketmu dengan jasa kami , cepat , murah dan aman</p>
            <button className="py-2 px-6 rounded-lg text-white font-jaksel bg-[#5CB30B] shadow-md">Learn More</button>
        </div>
        </div>  
            <Cari />
            <Price />
            <Transport />
            <Handling />
    </div>
    )
}

export default Home;