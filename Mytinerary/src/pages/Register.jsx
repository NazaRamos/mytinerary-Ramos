import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-[url("../../images/mapamundi-vintage-paises.jpg")] bg-center bg-cover p-5'>
        <form className='border bg-slate-500 bg-opacity-80 min-h-96 flex flex-col items-center gap-5 border-slate-900 max-[500px]:w-full lg:w-1/2 p-5' action="">
            <h1 className='text-3xl text-white'>Register</h1>
            <h3 className='text-sm text-center md:text-lg text-white italic'>Join us, and make the most out of your trip!</h3>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Name:
            <input className='w-full text-black' type="text" />
            </label>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Last name:
            <input className='w-full text-black' type="text" />
            </label>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Email:
            <input className='w-full text-black' type="text" />
            </label>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Password:
            <input className='w-full text-black' type="password" />
            </label>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Country:
            <input className='w-full text-black' type="text" />
            </label>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Phone:
            <input className='w-full text-black' type="text" />
            </label>
            <div className='w-full flex items-center justify-center gap-5'>
                <Link className='text-white bg-slate-600 w-20 justify-center h-8 text-center items-center flex p-1 rounded-md' to={"/"}>Go Home</Link>
                <button className='text-white bg-cyan-950 w-20 justify-center h-8 text-center items-center flex p-1 rounded-md' type="submit">Register</button>
            </div>
            <div className='text-white text-center max-[500px]:w-full md:w-full lg:w-2/3 flex flex-col border-0 border-t-2 border-white gap-5 p-5'>
                <p className='italic'>You already have an account?</p>
                <Link to={'/login'} className='text-white bg-cyan-950 w-20 self-center justify-center h-8 text-center items-center flex p-1 rounded-md'>Login</Link>
            </div>
        </form>
    </div>
  )
}

export default Register