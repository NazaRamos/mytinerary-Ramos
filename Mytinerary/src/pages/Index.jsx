import React from 'react'
import IndexCarousel from '../components/Carousel'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-slate-500 items-center'>
            

            <div className='min-h-[80vh] w-full md:min-h-[60vh] bg-slate-500 flex items-center justify-center flex-col p-5 gap-10 md:flex-row md:ps-14'>
                <div className='w-full'>
                    <img className='w-full' src="../images/Hero.png" alt="" />
                </div>
                <div className='w-full flex items-center justify-center'>
                <Link className='w-full flex items-center justify-center' to={"/cities"}>
                    <img className='hover:scale-110 transform duration-150 w-3/4 p-5' src="../images/MyTinerarypics.png" alt="" />
                </Link>    
                </div>
            </div>

            <div className='max-md:hidden md:min-h-[40vh] p-5 w-full bg-[url("../images/mapamundi-vintage-paises.jpg")] bg-cover bg-center bg-no-repeat flex flex-col items-center'>
                <div className='flex flex-col w-8/12 min-h-[83vh] items-center pt-2'>
                    <h2 className='bg-slate-500 text-center text-white p-1 border-2 border-cyan-950 font-medium italic'>Popular MyTineraries</h2>
                    <div className='flex w-full min-h-[90vh] items-center justify-around px-5'>
                        <IndexCarousel/>
                    </div>
                </div>
            </div>

         
        </div>
    )
}

export default Index