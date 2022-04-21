import React, { useState } from 'react';

function Price() {
    const [prize] = useState([
        {
            weight: 'More than 10KG',
            pay: '$100 USD'
        },
        {
            weight: 'More than 49KG',
            pay: '$105 USD'
        },
        {
            weight: 'More than 99KG',
            pay: '$110 USD'
        },
        {
            weight: 'More than 10KG',
            pay: '$120 USD'
        },
        {
            weight: 'More than 10KG',
            pay: '$1000 USD'
        },
        {
            weight: 'More than 10KG',
            pay: '$1200 USD'
        },
    ]) 
    const [second] = useState('Logistics helps its entrepreneurs connect with mentors and associates in the global network through a targeted and needs-based approach. Connections include mentoring.');
    return (
        <div className="container mx-auto py-24 md:px-20 font-jaksel">
            <p className="text-4xl text-[#595959] font-bold mb-5 md:text-center lg:text-left md:px-0 px-5">Any Size With Affordable Prize</p>
            <p className="text-[#222222bd] text-lg md:text-xl md:text-center lg:text-left mb-14 md:px-0 px-5">{second}</p>

            <div className='rounded-xl bg-[#fdf5f5] px-5 md:px-10 py-6 flex justify-between items-center'>
                <div className='xl:block hidden'>
                    <p className='font-bold text-xl text-[#595959] mb-6'>Lorem ipsum Dolor sit amet</p>
                    <img src="/img/pengangkut.png" alt="" />
                </div>
                <div className='flex-grow'>
                    <div className='flex justify-end mb-6'>
                    <button className='text-white bg-[#FFC22B] font-semibold py-2 px-3 rounded-md border'>BEST OFFER</button>
                    </div>
                    <div className='font-dmsans lg:px-16'>
                        <div className='text-[#6E7A7B] font-bold flex justify-between text-xl mb-5 px-5 md:px-10'>
                            <p>Cost of Airfreight</p>
                            <p>Price</p>
                        </div>
                        {
                            prize.map(item => 
                                <div className='font-semibold flex justify-between odd:bg-[#a2d4743a] px-5 md:px-10 py-5 rounded-full'>
                                    <p>{ item.weight }</p>
                                    <p>{ item.pay }</p>
                                </div>  
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price