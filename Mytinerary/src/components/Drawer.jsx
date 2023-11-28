import React from 'react'
import { Link } from 'react-router-dom'

const Drawer = (props) => {
  return (
    <div className='max-md:w-full w-1/4 h-full border-2 bg-slate-500 p-5 absolute translate top-0 left-0 z-10'>
        <div className='flex justify-between items-center'>
            <img className='w-1/2' src="../images/TitleMyTinerary.png" alt="" />
            <img className='w-6 h-6 bg-white rounded-full cursor-pointer' onClick={() => props.setShow(false)} src="../public/images/X.png" alt="" />
        </div>

        <div className='flex flex-col w-full h-full items-center mt-10 gap-10 text-white'>
            <Link className='border-b-2 border-l-2 w-2/3' to={"/"}>
            <h2 className='font-semibold ps-6 cursor-pointer hover:scale-110 transform duration-150'>Home</h2>
            </Link>
            <Link className='border-b-2 border-l-2 w-2/3' to={"/cities"}>
            <h2 className='font-semibold ps-6 cursor-pointer hover:scale-110 transform duration-150'>Cities</h2>
            </Link>
            <Link className='border-b-2 border-l-2 w-2/3' to={"/m&v"}>
            <h2 className='font-semibold ps-6 cursor-pointer hover:scale-110 transform duration-150'>Our mission and vision</h2>
            </Link>
            <Link className='border-b-2 border-l-2 w-2/3' to={"/location"}>
            <h2 className='font-semibold ps-6 cursor-pointer hover:scale-110 transform duration-150'>Where to find us</h2>
            </Link>
        </div>
    </div>
  )
}

export default Drawer