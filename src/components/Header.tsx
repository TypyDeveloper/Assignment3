import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
 <div className='bg-blue-900 text-white w-full h-36 flex justify-center items-center md:w-full md:h-24 md:flex md:justify-center md:items-center'>
 <div>
            <Image src={"/images/logo.9ff76f62.png"} alt='headerlogo' width={70} height={100} className='mt-28 w-56 h-24 md:mt-24  md:h-28 md:w-28'/>
          </div>
        <div className=' w-[90%] h-24  grid justify-between items-center md:w-[90%] md:h-20 md:flex' >
         
          <div>
          <h1 className='text-sm text-nowrap flex font-bold text-blue-200 md:text-2xl md:ml-12 ' >Tuition Free Education Program on Latest Technologies</h1>
          </div>
          <div className='flex justify-center items-center '>
            <ul className='text-sm font-bold flex gap-2 md:text-xl md:gap-6'>
              <li ><Link href={""}>Home</Link></li>
              <li ><Link href={""}>Apply</Link></li>
              <li ><Link href={""}>Jobs</Link></li>
              <li ><Link href={""}>Result</Link></li>
              <li ><Link href={""}>Courses</Link></li>
            </ul>

          </div>
       
        </div>
      </div>




    </div>
  )
}

export default Header;