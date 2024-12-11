import FAQAccordion from "./FAQAccordion";


function FAQs() {
    return (
        <div className="mt-36 relative">
            <div className="sm:w-full lg:w-3/4 lg:mx-auto bg-customFaqBg pb-10 rounded-xl ">
            <h1 className="pt-12 font-custom text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-darkYellow">FAQs</h1> 
            <FAQAccordion/>
            </div>
            <div className='absolute top-0 bottom-0 right-0 left-0 w-full bg-faq-bg bg-no-repeat bg-cover  -z-50'></div>
        </div>
    );
}

export default FAQs;