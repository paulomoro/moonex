import HeroContent from "./HeroContent";
import Navbar from "./Navbar";
// import background from '../../assets/bg.png'
// import foreground from '../../assets/foreground.png'

function HeroWrapper () {
    return (
        <div className="lg:h-screen">
             <Navbar/>
             <HeroContent/>
            <div className='absolute top-0 bottom-0 right-0 left-0 w-full bg-hero-foreground bg-no-repeat bg-cover  -z-50'></div>
            <div className="absolute top-0 bottom-0 right-0 left-0 w-full bg-hero-bg bg-no-repeat bg-cover -z-50"></div>
        </div>
    );
}

export default HeroWrapper;