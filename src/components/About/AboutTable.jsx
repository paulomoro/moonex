import rowData from '../../rowData.js'
import uniswap from '../../assets/uniswap.png'
import moonex from '../../assets/moonex.png'
import comparison from '../../assets/Comparison.png'

function AboutTable() {

        


    return (
        <div className='p-5 sm:p-3 md:p-6 lg:p-8 xl:p-10 bg-customWhite rounded-2xl mt-10'>
            <table className="min-w-full border-collapse ">
        <thead className='mb-10'>
          <tr className='border-b border-gray-700 mb-10'>
            <th className="border-r  border-gray-700 px-2 py-7 sm:py-3 md:py-4 lg:py-5 xl:pt-3">
                <div className='flex justify-center items-center'>
                <img src={comparison} alt="" className='w-48'/>
                </div>
                </th>
            <th className="border-r  border-gray-700 px-2 py-7 sm:py-3 md:py-4 lg:py-5 xl:pt-3">
                <div className='flex justify-center items-center'>
                <img src={moonex} alt="" className='w-48'/>
                </div>
                </th>
            <th className="px-2 py-7 sm:py-3 md:py-4 lg:py-5 xl:pt-3">
                <div className='flex justify-center items-center'>
                <img src={uniswap} alt="" className='w-48'/>
                </div>
                </th>
          </tr>
        </thead>

        <tbody>
          {rowData.map((row, index) => (
            <tr key={index} className='border-b  border-gray-700  justify-center'>

              <td className="border-r  border-gray-700 p-2 font-custom text-xs sm:text-xs md:text-base
               text-gray-300 font-light pl-0 sm:pl-0 md:pl-4  lg:pl-6 xl:pl-9">
                {index+1}. {row.comparison}</td>

              <td className="border-r  border-gray-700 p-2">
                <div className='flex justify-center items-center'><img src={row.moonex} alt=""/></div>
              </td>

              <td className=" p-2 ">
               <div className='flex justify-center items-center'> <img src={row.uniswap} alt="" /></div>
              </td>

            </tr>
          ))}
        </tbody>
            </table>
        </div>
    );
}

export default AboutTable;