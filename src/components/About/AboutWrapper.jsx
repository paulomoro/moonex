import AboutTable from "./AboutTable";
import OurFeatures from "./OurFeatures";


function AboutWrapper() {
    return (
        <div className="h-full relative">
            <h1  className="pt-10 font-custom text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Why <span className="text-darkYellow">MoonEX</span> ?</h1>
            <AboutTable/>
            <OurFeatures/>
            <div className='absolute -top-4 bottom-0 right-0 left-0 w-full bg-about-bg bg-no-repeat bg-cover  -z-50'></div>
        </div>
    );
}

export default AboutWrapper;