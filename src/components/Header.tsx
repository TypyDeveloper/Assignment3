import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='bg-black text-white w-full h-20 flex justify-center items-center md:w-full md:h-32 md:flex md:justify-center md:items-center'>
        <div className='bg-green-950 w-[80%] h-16  flex justify-center items-center md:w-[90%] md:h-28' >
          <h1 className='text-3xl font-bold text-white ' >Assignment 3</h1>
        </div>
      </div>

      <div className=' w-full h-[1000px] flex justify-center items-center md:flex md:justify-center md:items-center md:w-[full] md:h-[1000px]' >
        <div className='bg-green-950 shadow-lg shadow-indigo-500/50 w-[70%] h-[95%] grid grid-cols-1 justify-items-center
      md:w-[60%] md:h-[80%] m-5 p-3  
       md:grid-cols-2  md:gap-3 md:justify-center md:items-center 
      lg:w-[60%] lg:h-[65%] 
         lg:grid-cols-3 lg:gap-1 lg:justify-center lg:items-center'>
          <div className='bg-black text-white w-[200px] h-[150px] flex justify-center items-center mb-4
        md:w-[200px] md:h-[150px] 
         lg:w-[250px] lg:h-[150px]  '> Division 1</div>
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
        lg:w-[250px] lg:h-[150px] '> Division 4</div>

        </div>
      </div>
    </div>
  )
}

export default Header