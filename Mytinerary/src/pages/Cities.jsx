import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  async function getCities() {
    try {
      const { data } = await axios('http://localhost:4000/cities');
      const cities = data.allCities;
      setCities(cities);
      setFilteredCities(cities);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (e) => {
    const term = e.target.value.trimStart().toLowerCase();
    setSearchTerm(term);

    const filtered = cities.filter((city) =>
      city.name.toLowerCase().startsWith(term)
    );

    setFilteredCities(filtered);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredCities(cities);
  };

  return (
    <div className='bg-slate-500 min-h-[80vh] w-full flex flex-col justify-center items-center py-10'>
        <div className='mb-10 relative'>
          <input
            type='text'
            placeholder='Search city...'
            className='p-2 border border-gray-300 rounded w-full'
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <button
              className='absolute right-0 top-0 mr-2 mt-1 p-1 text-gray-500 hover:text-gray-700'
              onClick={clearSearch}
            >
              Clear
            </button>
          )}
        </div>
      <div className='w-[80vw] flex max-md:flex-col md:flex-wrap gap-5 justify-center items-center'>

        {filteredCities.length === 0 ? (
          <p className='text-xl text-white'>There are no matching cities.</p>
        ) : (
          filteredCities.map((city) => (
            <Link
              to={`/${city._id}/details`}
              key={city.name}
              className='w-60 h-80 py-1 px-2 gap-1 rounded-se-3xl rounded-bl-3xl border-2 bg-white border-black hover:scale-110 hover:shadow-sm transition hover:shadow-black flex flex-col items-center justify-center'
            >
              <h1 className='w-full text-center font-semibold pb-1 text-lg'>
                {city.name}
              </h1>
              <img className='w-full h-[50%] rounded-tl-3xl rounded-br-3xl' src={city.photo} alt='' />
              <p className='w-full text-sm text-end italic'>
                {city.country}, {city.continent}
              </p>
              <p className='line-clamp-2'>{city.description}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Cities;




// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Cities = () => {

//   const [cities, setCities] = useState([])

//   async function getCities() {
//     try {
//       const {data} = await axios('http://localhost:4000/cities')
//       const cities = data.allCities
//       console.log(cities)
//       setCities(cities)
//     } catch (error) {
//       console.log(error)  
//     }
//   }

// useEffect(()=>{
//   getCities()
// }, [])





//   return (
//     <div className='bg-slate-500 min-h-[80vh] w-full flex justify-center items-center py-10'>
//       <div className='w-[80vw] flex max-md:flex-col md:flex-wrap gap-5 justify-center items-center'>
//         {cities.map((city)=>(
//           <div className='w-60 h-80 py-1 px-2 gap-1 rounded-se-3xl rounded-bl-3xl border-2 bg-white border-black hover:scale-110 hover:shadow-sm transition hover:shadow-black flex flex-col items-center justify-center'>
//             <h1 className='w-full text-center font-semibold pb-1 text-lg'>{city.name}</h1>
//             <img className='w-full h-[50%]' src={city.photo} alt="" />
//             <p className='w-full text-sm text-end italic'>{city.country}, {city.continent}</p>
//             <p className='line-clamp-2'>{city.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Cities