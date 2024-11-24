import React from 'react'
import Image from 'next/image';

const Card = () => {
  return (
    <div>
     

      <div className=' w-full h-[700px] flex justify-center items-center md:flex md:justify-center md:items-center md:w-[full] md:h-[400px]' >
        <div className=' shadow-lg shadow-indigo-500/50 w-[80%] h-[85%] grid grid-cols-1 justify-items-center
      md:w-[60%] md:h-[80%] m-5 p-3  
       md:grid-cols-2  md:gap-3 md:justify-center md:items-center 
      lg:w-[80%] lg:h-[85%] 
         lg:grid-cols-3 lg:gap-1 lg:justify-center lg:items-center'>
          <div>
            <Image src={"/images/imageWebsite.5c6ae62f.jpg"} alt='card1' width={200} height={300} className='w-[200px] h-[150px] flex justify-center items-center mb-4
        md:w-[200px] md:h-[150px] 
         lg:w-[350px] lg:h-[280px]'/>
         </div>
         <div>
            <Image src={"/images/imageWebsite2.a102c7b5.jpg"} alt='card1' width={200} height={300} className='w-[200px] h-[150px] flex justify-center items-center mb-4
        md:w-[200px] md:h-[150px] 
         lg:w-[350px] lg:h-[280px]'/>
         </div>
         <div>
            <Image src={"/images/imageWebsite3.b845fe78.jpg"} alt='card1' width={200} height={300} className='w-[200px] h-[150px] flex justify-center items-center mb-4
        md:w-[200px] md:h-[150px] 
         lg:w-[350px] lg:h-[280px]'/>
         </div>
        




          {/* <div className='bg-black text-white' > Division 1</div>
          <div className='bg-white w-[200px] h-[150px] flex justify-center items-center mb-4 
        md:w-[200px] md:h-[150px] 
        lg:w-[250px] lg:h-[150px]  '> Division 2</div>
          <div className='bg-black text-white w-[200px] h-[150px] flex justify-center items-center mb-4  md:w-[200px] md:h-[150px] 
        lg:w-[250px] lg:h-[150px] '> Division 3</div>
          <div className='bg-white w-[200px] h-[150px] flex justify-center items-center mb-4 md:w-[200px] md:h-[150px] 
        lg:w-[250px] lg:h-[150px] '> Division 4</div>
          <div className='bg-black text-white w-[200px] h-[150px] flex justify-center items-center mb-4  md:w-[200px] md:h-[150px] 
        lg:w-[250px] lg:h-[150px] '> Division 3</div>
         <div className='bg-white w-[200px] h-[150px] flex justify-center items-center mb-4 md:w-[200px] md:h-[150px] 
        lg:w-[250px] lg:h-[150px] '> Division 4</div> */
        }

        </div>
      </div>
    </div>
  )
}

export default Card;