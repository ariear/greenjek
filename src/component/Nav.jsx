import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav className="flex items-center justify-between py-4 px-5 md:px-10 shadow-md fixed w-screen bg-white z-50">
        <img className="w-[60px] lg:w-[80px]" src="/img/logo-jek.png" alt="dsadas" />
        <div className="hidden lg:flex items-center font-jaksel ">
            <p className="lg:mr-8 xl:mr-14"><Link to="/">Home</Link></p>
            <p className="lg:mr-8 xl:mr-14"><Link to="/service">Our Service</Link></p>
            <p className="lg:mr-8 xl:mr-14">About US</p>
            <p className="lg:mr-8 xl:mr-14">Advantages</p>
            <p>Our Team</p>
        </div>
        <div className="flex items-center">
        <button className="py-2 px-5 md:px-8 rounded-lg text-white font-jaksel bg-[#5CB30B] shadow-md">Sign Up</button>
        <img src="/img/menu-jek.svg" className="lg:hidden block ml-5" alt="das" />
        </div>
    </nav>
    )
}
export default Nav;