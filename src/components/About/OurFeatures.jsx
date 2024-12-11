import featuresData from '../../featuresData.js'

function OurFeatures() {
    return (
        <div className='pb-10'>
            <h1 className='pt-12 font-custom text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center'><span className='text-darkYellow'>Our</span> Features</h1>
            <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-10'>
                {featuresData.map((features,index)=> (
                    <div key={index} className='bg-customWhite p-10 rounded-xl border border-gray-800'>
                        <div className='w-14 h-14 bg-customgreywhite rounded-full flex justify-center items-center'>
                            <img src={features.icon} alt="" className='w-8 h-8'/></div>
                        <h1 className='pt-8 font-semibold '>{features.title}</h1>
                        <p className='pt-5 text-customGrey'>{features.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurFeatures;