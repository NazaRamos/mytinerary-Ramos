import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer bg-cyan-950 min-h-[15vh] w-full items-center justify-around border-t-2 border-slate-300 flex flex-col md:flex-row p-3'>
            <div className='w-1/2 text-white flex flex-row max-md:flex-col items-center gap-5 max-md:border-b-2 md:border-e-2 border-slate-500 justify-around py-3 font-semibold '>
                <Link to={"/"}>Home</Link>
                <Link to={"/cities"}>Cities</Link>
                <Link to={"/about"}>About us</Link>
            </div>
            
            <div className='text-white w-1/2 flex py-3 flex-col gap-3 items-center justify-center'>
                <h1>Contact us:</h1>
                <div className='flex gap-10 items-center justify-center'>
                    <img className='w-6 cursor-pointer hover:scale-125' src="../images/whatsapp.png" alt="" />
                    <img className='w-7 cursor-pointer hover:scale-125' src="../images/instagram.png" alt="" />
                    <img className='w-6 cursor-pointer hover:scale-125' src="../images/twitter.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer