function Cari() {
    return (
    <div className="flex py-10 justify-center flex-wrap shadow-md bg-white">
        <div className="font-jaksel xl:mr-10 xl:mb-0 mb-5">
            <p className="text-xl font-bold mb-4">Track Delivery</p>
            <div>
                <input type="text" className="border py-2 px-3 rounded-lg mr-4 text-sm w-[50vw] md:w-[200px]" placeholder="Delivery receipt number" />
                <button className="py-2 px-5 md:px-8 rounded-lg text-white bg-[#5CB30B] text-sm">Search</button>
            </div>
        </div>
        <div className="font-jaksel md:pl-0 pl-5">
            <p className="text-xl font-bold mb-4">Shipping Cost</p>
            <input type="text" className="border py-2 text-sm px-3 rounded-lg mr-4 w-[80vw] md:w-max xl:w-[300px] md:mb-0 mb-4" placeholder="Place of origin" />
            <input type="text" className="border py-2 text-sm px-3 rounded-lg mr-4 w-[80vw] md:w-max xl:w-[300px] md:mb-0 mb-4" placeholder="Destination area" />
            <input type="text" className="border py-2 text-sm px-3 rounded-lg mr-4 w-[80vw] md:w-max md:mb-0 mb-4" placeholder="Weight" />
            <button className="py-2 px-6 rounded-lg text-white bg-[#316FC3] text-sm">Check Now</button>
        </div>
    </div>
    )
}

export default Cari;