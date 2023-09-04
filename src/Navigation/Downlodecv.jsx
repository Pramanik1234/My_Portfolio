import React from 'react'
import { AiOutlineDownload } from '@react-icons/all-files/ai/AiOutlineDownload'

const Downlodecv = () => {
  return (
    <button className=' text-xs px-4 py-1 m-4 sm:m-0 capitalize border rounded-2xl sm:py-1 sm:px-2 
    hover:opacity-50 whitespace-nowrap text-white cursor-pointer'>
      <a href="/subrata pramanik.pdf" download={true} className='flex items-center justify-between gap-2'><span>Resume</span>
        <small className='text-sm'><AiOutlineDownload /></small></a>
    </button>
  )
}

export default Downlodecv