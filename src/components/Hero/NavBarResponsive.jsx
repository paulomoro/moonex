import { FiX } from "react-icons/fi";



function NavBarResponsive(prop) {
    return (
        <div className={`lg:w-0  w-5/6 h-full bg-footerColor fixed transform top-0 right-0 transition-transform duration-500 ease-in-out z-10`}>
           
            <button className="flex justify-end  w-full pt-16 pr-10 " onClick={prop.handleClose}>
                <FiX className="text-4xl text-white"/>
            </button>

            <nav className='flex flex-col justify-between items-center font-bold h-64 mt-20'>
                <a href="#" className='text-secondaryYellow hover:text-darkYellow transition duration-700 ease-in-out'>Home</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>About Us</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>Road Map</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>FAQs</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>Contact Us</a>
            </nav>

            <button className='flex justify-center  mx-auto px-6 py-3 rounded-3xl bg-gradient-to-r from-darkYellow mt-20
                 to-secondaryYellow text-xs text-buttonColor font-bold cursor-pointer 
                  hover:from-secondaryYellow hover:to-darkYellow'>
                    Connect Wallet
            </button>
        </div>
    );
}

export default NavBarResponsive;