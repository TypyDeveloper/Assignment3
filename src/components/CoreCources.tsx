import React from 'react'
import Image from 'next/image'

const CoreCources = () => {
  return (
    <div>
     <div className=' w-full h-[800px] grid justify-center items-center md:grid md:justify-center md:items-center md:w-[full] md:h-[400px]' >
     <div className=' text-xl text-blue-900 font-bold md:mt-14 md:font-extrabold md:text-4xl'>
     <h1 >Core Cources Sequence</h1>
        </div>
       <div className=' shadow-lg shadow-indigo-500/50 w-[80%] h-[95%] grid grid-cols-1 justify-items-center
     md:w-[60%] md:h-[80%] m-5 p-3 
      md:grid-cols-2  md:gap-3 md:justify-center md:items-center 
     lg:w-[1250px] lg:h-[99%] 
        lg:grid-cols-3 lg:gap-1 lg:justify-center lg:items-center'>
            
         <div className=' justify-items-center font-semibold'>
           <Image src={"/images/programming_fundamentals.49cca4e9.jpg"} alt='card1' width={200} height={300} className='w-[210px] h-[180px] flex justify-center items-center mb-4 rounded-t-lg hover:-translate-y-1 
           hover:scale-110 duration-100
       md:w-[200px] md:h-[150px] 
        lg:w-[350px] lg:h-[200px]'/>

        <h1 className=' justify-items-center text-gray-700 text-nowrap md:text-xl '>Programming Fundamentals</h1>
        </div>
        <div className=' justify-items-center font-semibold'>
           <Image src={"/images/nextjs.3dff0f70.jpg"} alt='card1' width={200} height={300} className='w-[210px] h-[180px] flex justify-center items-center mb-4 rounded-t-lg hover:-translate-y-1 
           hover:scale-110 duration-100
       md:w-[200px] md:h-[150px] 
        lg:w-[350px] lg:h-[200px]'/>
        <h1 className='justify-items-center text-gray-700 text-nowrap  md:text-xl'>Web2 Using NextJS</h1>
        </div>
        <div className=' justify-items-center font-semibold'>
           <Image src={"/images/earn_as_your_learn.b8248a49.jpg"} alt='card1' width={200} height={300} className='w-[210px] h-[180px] flex justify-center items-center mb-4 rounded-t-lg hover:-translate-y-1 
           hover:scale-110 duration-100
       md:w-[200px] md:h-[150px] 
        lg:w-[350px] lg:h-[200px]'/>
          <h1 className=' justify-items-center text-gray-700 text-nowrap  md:text-xl '>Earn As You Learn</h1>
        </div>
       




        
       
     </div>


     </div>
    </div>
  )
}

export default CoreCources