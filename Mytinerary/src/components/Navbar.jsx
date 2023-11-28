import React, { useState } from 'react'
import Drawer from './Drawer'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [show, setShow] = useState(false)
    const [userMenuVisible, setUserMenuVisible] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuVisible(!userMenuVisible);
    };


    return (
        <div className='navbar bg-cyan-950 w-full min-h-[20vh] border-b-2 border-slate-300 flex items-center justify-between px-10'>
            <img onClick={() => setShow(true)} className='w-8 h-8 md:hidden bg-white rounded-full cursor-pointer shadow-lg shadow-black border-white border' src="../images/menu3.png" alt="" />
            <div className='max-md:hidden text-white flex justify-around font-semibold w-1/6 md:w-1/3'>
                <Link to={"/"}>Home</Link>
                <Link to={"/cities"}>Cities</Link>
                <Link to={"/about"}>About us</Link>
            </div>
            <Link to={"/"} className='flex justify-center w-1/3'>    
                <img className='w-20 h-20 rounded-full border-2 shadow-lg shadow-black border-gray-300' src="../images/MyTinerary.png" alt="" />
            </Link>
            <div className='flex justify-center'>
        <img
          onClick={toggleUserMenu}
          className='w-8 h-8 md:hidden shadow-lg rounded-full shadow-black'
          src="../images/user.png"
          alt=""
        />
        {userMenuVisible && (
          <div className="user-menu absolute flex flex-col bg-slate-500 top-20 p-1 rounded-lg border border-white text-white">
            <Link className='border-b text-center p-1' to={"/login"} onClick={toggleUserMenu}>
              Login
            </Link>
            <Link className='text-center p-1' to={"/register"} onClick={toggleUserMenu}>
              Register
            </Link>
          </div>
        )}
      </div>
            <div className='max-md:hidden text-white flex justify-center gap-10 font-semibold w-1/6 md:w-1/3'>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </div>
            {show && <Drawer setShow={setShow}/>}
        </div>
    )
}

export default Navbar