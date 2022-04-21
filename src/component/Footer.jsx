import { useState } from "react";

function Footer() {
    const [dataFo] = useState([
        {
            title: 'What we do',
            isi: [
                {
                    judulIsi: 'Lorem ipsum'
                },
                {
                    judulIsi: 'Lorem ipsum'
                },
                {
                    judulIsi: 'Lorem ipsum'
                },
                {
                    judulIsi: 'Lorem ipsum'
                },
            ]
        },
        {
            title: 'About Us',
            isi: [
                {
                    judulIsi: 'Lorem ipsum'
                },
                {
                    judulIsi: 'Lorem ipsum'
                },
                {
                    judulIsi: 'Lorem ipsum'
                }
            ]
        },
        {
            title: 'Impact',
            isi: [
                {
                    judulIsi: 'Global'
                },
                {
                    judulIsi: 'Indonesia'
                }
            ]
        },
        {
            title: 'Berita dan penelitian',
            isi: [
                {
                    judulIsi: 'Blog'
                },
                {
                    judulIsi: 'Report'
                },
                {
                    judulIsi: 'News Letter'
                }
            ]
        },
    ])

    const [medsos] = useState([
        {
            icon: 'img/line.png',
            namaMedsos: 'Line'
        },
        {
            icon: 'img/instagram.png',
            namaMedsos: 'Instagram'
        },
        {
            icon: 'img/twitter.png',
            namaMedsos: 'Twitter'
        }
    ])

    return (
        <div className="relative">
            <div className="text-white flex flex-wrap justify-between items-center bg-cover bg-no-repeat bg-center w-[90vw] px-5 lg:px-10 mx-auto py-14 absolute rounded-xl left-0 right-0 -top-28" style={{ backgroundImage: "url(/img/hijau-panjang.png)" }}>
                <div className="font-nato md:mb-0 mb-5">
                <p className="font-bold text-2xl mb-3">Lorem ipsum Dolor Sit amet?</p>
                <p className="text-sm">Go submit your great Idea, and let us make it awesome!</p>
                </div>
                <div className="font-robot">
                    <button className="py-3 px-5 lg:px-8 font-medium bg-[#61C702] rounded-lg mr-2 lg:mr-5">Try Now</button>
                    <button className="py-3 px-5 lg:px-8 font-medium bg-white text-black rounded-lg ml-2 lg:ml-5">Sign Up</button>
                </div>
            </div>
        <div className="bg-[#F7F7FA] pb-8 pt-48 md:pt-16 font-robot">
            <div className="flex justify-around flex-wrap py-14">
                {
                    dataFo.map(e =>                         
                        <div className="md:mx-0 mx-2 md:mb-0 mb-3">
                            <p className="font-bold mb-3">{e.title}</p>
                            {e.isi.map(kin =>
                                <p className="mb-2 text-sm">{kin.judulIsi}</p>
                            )}
                        </div>
                    )
                }
                <div>
                    <p className="font-bold mb-3">Social Media</p>
                    {
                        medsos.map(e => 
                            <div className="flex items-center mb-4">
                                <img src={e.icon} className="mr-3" alt="" />
                                <p className="text-sm">{e.namaMedsos}</p>
                            </div>  
                        )
                    }
                </div>
            </div>
            <p className="text-center text-sm">Made by Arie in Jember &copy;</p>
        </div>
        </div>
    )
}

export default Footer;