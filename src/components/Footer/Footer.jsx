import footerLogo from  '/Images/footer-logo.png'
import { FaTelegramPlane, FaDiscord, FaTwitter } from 'react-icons/fa';

function Footer() {

    return (
        <footer className=' bg-footerColor mt-28'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:max-w-[1360px] lg:mx-auto lg:my-0 py-10 px-6 lg:px-5'>
            <img src={footerLogo} alt="footer logo" className=' w-36 -mx-6 lg:w-32' />
            <nav className='flex space-x-4 lg:justify-between font-bold lg:w-2/5'>            
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>About Us</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>Road Map</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>FAQs</a>
                <a href="" className='hover:text-darkYellow transition duration-700 ease-in-out'>Contact Us</a>
            </nav>
            <div className='mt-4'>
                <h2 className='font-custom text-xl sm:text-lg md:text-xl font-semibold lg:-mt-7'>Contact <span className='text-darkYellow'>Us</span></h2>
                <div className='flex space-x-3 lg:justify-between items-center mt-4 '>
                    <a href=""> 
                        <FaTelegramPlane className='w-8 h-8 bg-white rounded-full text-footerColor text-sm p-1 hover:text-white  hover:bg-darkYellow transition duration-700 ease-in-out'/> </a>
                    <a href="">  <FaDiscord className='w-8 h-8 bg-white rounded-full text-footerColor text-sm p-1 hover:text-white  hover:bg-darkYellow transition duration-700 ease-in-out'/> </a>
                    <a href="">  <FaTwitter className='w-8 h-8 bg-white rounded-full text-footerColor text-sm p-1 hover:text-white  hover:bg-darkYellow transition duration-700 ease-in-out'/> </a>
                </div>
            </div>
            </div>
            
        </footer>
    );
}

export default Footer;