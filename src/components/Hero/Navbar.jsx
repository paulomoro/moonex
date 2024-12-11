import { useState } from 'react';
import logo from '/Images/logo.png'
import { FiMenu } from "react-icons/fi";
import NavBarResponsive from './NavBarResponsive';


function Navbar() {

    const [isOpen,setIsOpen] = useState(false)


    const handleOpen = ()=>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }  

    const handleClose = ()=>{
        setIsOpen(prevState => !prevState)
        console.log(isOpen)
    }  

    return (
        <div className='flex justify-between items-center pt-10'>
            <div className=''>
                <img src={logo} alt="moonex logo" className='w-56 lg:w-36'/>
            </div>

            <button className=' lg:hidden' onClick={handleOpen}>
               <FiMenu  className='text-4xl text-white'/>
            </button>

            {isOpen && <NavBarResponsive 
                handleClose={handleClose} 
                isOpen={isOpen}
            />}

            <div className='hidden lg:flex justify-between items-center w-full'>
            <nav className='flex justify-between w-1/2 mx-auto font-bold '>
                <a href="#" className='text-secondaryYellow hover:text-darkYellow transition duration-700 ease-in-out'>Home</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>About Us</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>Road Map</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>FAQs</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>Contact Us</a>
            </nav>
            <div className=''>
                <button className='px-6 py-3 rounded-3xl bg-gradient-to-r from-darkYellow
                 to-secondaryYellow text-xs text-buttonColor font-bold cursor-pointer 
                  hover:from-secondaryYellow hover:to-darkYellow '>
                    Connect Wallet
                </button>
            </div>
            </div>
           
        </div>
    );
}

export default Navbar;