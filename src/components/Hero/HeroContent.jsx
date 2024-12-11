

function HeroContent() {
    return (
        <div className="mt-48 mb-44 lg:mb-0 lg:mt-72 xl:mt-80">
            <h1 className="font-custom font-semibold text-5xl sm:text-6xl md:text-6xl lg:text-7xl">
                Trusted Multi-Chain <br /> 
                <span className="text-secondaryYellow">DEX</span>  Platform</h1>
            <p className="font-custom font-light text-customGrey text-lg mt-4">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
            
            <div className="mt-9">
            <button className='px-6 py-3 mr-9 rounded-3xl bg-gradient-to-r from-darkYellow
                 to-secondaryYellow text-xs text-buttonColor font-bold cursor-pointer 
                  hover:from-secondaryYellow hover:to-darkYellow '>
                    Connect Wallet
                </button>
                <button className='px-6 py-3 rounded-3xl bg-transparent border-2 border-darkYellow text-xs text-darkYellow font-bold cursor-pointer 
                  hover:bg-darkYellow hover:text-buttonColor transition duration-700 ease-in-out'>
                    Trade Crypto
                </button>
            </div>
        </div>
    );
}

export default HeroContent;