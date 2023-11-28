import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-[url("../../images/mapamundi-vintage-paises.jpg")] bg-center bg-cover p-5'>
        <form className='border bg-slate-500 bg-opacity-80 min-h-96 flex flex-col items-center gap-5 border-slate-900 max-[500px]:w-full lg:w-1/2 p-5' action="">
            <h1 className='text-3xl text-white'>Login</h1>
            <h3 className='text-sm text-center md:text-lg text-white italic'>Welcome back! Let's find the perfect adventure!</h3>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Email:
            <input className='w-full text-black' type="text" />
            </label>
            <label className='text-white flex flex-col max-[500px]:w-full md:w-full lg:w-2/3' htmlFor="">Password:
            <input className='w-full text-black' type="password" />
            </label>
            <div className='w-full lg:w-2/3 flex items-center justify-center gap-5'>
                <Link className='text-white bg-slate-600 w-20 justify-center h-8 text-center items-center flex p-1 rounded-md' to={"/"}>Go Home</Link>
                <button className='text-white bg-cyan-950 w-20 justify-center h-8 text-center items-center flex p-1 rounded-md' type="submit">Login</button>
            </div>
            <div className='text-white text-center max-[500px]:w-full md:w-full lg:w-2/3 flex flex-col border-0 border-t-2 border-white gap-5 p-5'>
                <p className='italic'>You don't have an account yet?</p>
                <Link to={'/register'} className='text-white bg-cyan-950 w-20 self-center justify-center h-8 text-center items-center flex p-1 rounded-md'>Register</Link>
            </div>
        </form>
    </div>
  )
}

export default Login