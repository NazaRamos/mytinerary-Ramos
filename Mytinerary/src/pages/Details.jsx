import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams();
    const [city, setCity] = useState({})

    useEffect(() => {
        getCity();
      }, []);
    
      async function getCity() {
        try {
          const { data } = await axios(`http://localhost:4000/cities/${id}`);
          const city = data.city;
          setCity(city)
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div className='w-full min-h-screen bg-cover bg-center flex items-center justify-center p-3'
    style={{ backgroundImage: `url(${city.photo})` }}
    >
        <div className=' md:w-96 md:h-96 p-5 bg-white border-2 md:border-4 border-black rounded-3xl md:rounded-full flex flex-col text-center items-center justify-center gap-5 bg-opacity-80'>
            <h1 className='text-2xl'>{city.name}</h1>
            <h2>{city.country}, {city.continent}</h2>
            <p className='text-xs font-semibold'>{city.description}</p>
            <Link className='text-white text-xs hover:scale-110 bg-cyan-950 w-20 self-center justify-center h-8 text-center items-center flex p-1 rounded-md' to={'/cities'}>Back to cities</Link>
        </div>
    </div>
  )
}

export default Details