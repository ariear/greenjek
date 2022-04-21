import { useState } from "react";

function Transport() {
    const [second] = useState('We can manage end to end Logistics helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.')
    const [cycle] = useState([
        {
            id: '03',
            tranport : 'Ship',
            desc: 'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'
        },
        {
            id: '01',
            tranport : 'Motorcycle',
            desc: 'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'
        },
        {
            id: '04',
            tranport : 'Airplane',
            desc: 'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'
        },
        {
            id: '02',
            tranport : 'Pickup',
            desc: 'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'
        },
        {
            id: '05',
            tranport : 'Document',
            desc: 'Nemo enim ipsam voluptatem quia voluptas sit asperna netsum lorisum fugit, sed quia magni.'
        },
    ])

    return (
        <div className="container mx-auto md:px-20 font-jaksel">
            <p className="text-4xl text-[#595959] font-bold mb-5 md:text-center lg:text-left md:px-0 px-5">
                Complete cycle
            </p>
            <p className="text-[#222222bd] text-lg md:text-xl md:text-center lg:text-left md:px-0 px-5">{second}</p>
            <div className="grid md:grid-cols-2 md:gap-x-20 lg:gap-x-0 gap-y-10 justify-items-center items-end py-10">
                <img src="/img/alatberat.png" className="w-[80vw] md:w-[590px]" alt="" />
                {
                    cycle.map(e => 
                <div className="flex items-start w-[80vw] md:w-[320px]">
                    <p className="py-2 px-2 rounded-full text-white bg-[#5CB30B] font-light text-sm mr-5">{e.id}</p>
                    <div>
                        <p className="font-bold text-xl mb-3">{e.tranport}</p>
                        <p className="text-[#2f3035ab]">{e.desc}</p>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
    )
}

export default Transport;