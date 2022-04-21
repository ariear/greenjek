import { useState } from "react";

function Handling() {
    const [second] = useState('We can manage end to end Logistics helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.')
    const [paket] = useState([
        {
            variant : 'Packet - 01',
            kendaraan: 'Courier'
        },
        {
            variant : 'Packet - 02',
            kendaraan: 'Truck'
        },
        {
            variant : 'Packet - 03',
            kendaraan: 'Container'
        },
    ])
    const [weight] = useState([
        {
            berat: 'More than: 100KG',
            pay: '$1200 USD'
        },
        {
            berat: 'More than: 100KG',
            pay: '$1200 USD'
        },
        {
            berat: 'More than: 100KG',
            pay: '$1200 USD'
        },
        {
            berat: 'More than: 100KG',
            pay: '$1200 USD'
        },
        {
            berat: 'More than: 100KG',
            pay: '$1200 USD'
        },
    ])
    return (
        <div className="container mx-auto md:px-5 lg:px-20 pt-16 pb-48">
            <p className="text-4xl text-[#595959] font-bold mb-5 md:text-center lg:text-left md:px-0 px-5">
                Handling In Out & Transportation
            </p>
            <p className="text-[#222222bd] text-lg md:text-xl md:text-center lg:text-left mb-20 md:px-0 px-5">{second}</p>

            <div className="font-dmsans flex-wrap flex justify-center md:flex-row flex-col items-center mb-16">
                <div className="xl:mr-10 mb-10 lg:mb-0">
                    <img src="/img/check-shield.png" className="mb-3" alt="" />
                    <p className="font-bold text-lg w-[200px]">Guarantee safe, fast and convenient</p>
                </div>
                <div className="flex flex-wrap md:flex-row flex-col">
                    {
                        paket.map(e =>                             
                            <div className="text-center py-10 odd:bg-white text-white hover:bg-white hover:text-black hover:odd:text-white transition-all odd:text-black hover:odd:bg-[#5CB30B] bg-[#5CB30B] rounded-2xl px-7 md:mb-0 mb-5 md:mx-2">
                                <p className="font-bold text-lg mb-2">{e.variant}</p>
                                <p className="font-bold text-3xl mb-20">{e.kendaraan}</p>
                                <button className="py-2 px-6 rounded-full text-[#5CB30B] bg-white font-semibold">Choose plan</button>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="font-dmsans px-5 md:px-0">
                <div className="font-bold text-lg flex justify-between py-5 px-10">
                    <p>Weight</p>
                    <p>Weight</p>
                </div>
                {
                    weight.map(e =>                         
                        <div className="bg-[#a2d4744f] odd:bg-transparent rounded-2xl px-10 py-5 flex justify-between font-bold text-sm">
                            <p>{e.berat}</p>
                            <p>{e.pay}</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Handling;