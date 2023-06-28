import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 "/>
            <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300  pl-11 pr-4 rounded-sm'/>
        </div>
        <div className='flex items-center gap-2 mr-2'>

             <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className="rounded-sm p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
             <HiOutlineChatAlt fontSize={24}/>
              
            </Popover.Button>
             </>
            )}
           
      </Popover>

           
            <HiOutlineBell fontSize={24}/>
        </div>
    </div>
  )
}

export default Header