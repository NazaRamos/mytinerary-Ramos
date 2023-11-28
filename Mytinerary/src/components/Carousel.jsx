import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const IndexCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide + 2) % 3);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const images = [
    // Grupo 1
    [
      { nombre: 'Barcelona', imagen: '../images/Barcelona.png' },
      { nombre: 'Cape Town', imagen: '../images/CapeTown.png' },
      { nombre: 'Copenhagen', imagen: '../images/Copenhagen.png' },
      { nombre: 'El Cairo', imagen: '../images/ElCairo.png' },
    ],
    // Grupo 2
    [
      { nombre: 'Istanbul', imagen: '../images/Istanbul.png' },
      { nombre: 'Kyoto', imagen: '../images/Kyoto.png' },
      { nombre: 'New York', imagen: '../images/NewYork.png' },
      { nombre: 'Paris', imagen: '../images/Paris.png' },
    ],
    // Grupo 3
    [
      { nombre: 'Prague', imagen: '../images/Prague.png' },
      { nombre: 'Roma', imagen: '../images/Roma.png' },
      { nombre: 'Sydney', imagen: '../images/Sydney.png' },
      { nombre: 'Venecia', imagen: '../images/Venecia.png' },
    ],
  ];

  return (
    <div className='w-full h-full relative pb-5'>
      <img
        onClick={() => prevSlide()}
        className='z-10 cursor-pointer absolute w-8 h-8 rounded-full top-[50%] opacity-50 right-1'
        src="../images/arrow.png"
        alt=""
      />
      <img
        onClick={() => nextSlide()}
        className='z-10 cursor-pointer absolute w-8 h-8 rounded-full top-[50%] opacity-50 left-1 rotate-180'
        src="../images/arrow.png"
        alt=""
      />
      <Carousel
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        showStatus={false}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={true}
        transitionTime={0}
        showArrows={false}
      >
        {images.map((imageGroup, index) => (
          <div key={index} className="grid grid-cols-2 grid-rows-2 gap-5 mt-2 w-full bg-slate-500 bg-opacity-50 min-h-[40vh]">
            {imageGroup.map((city, i) => (
              <div
                key={i}
                className='bg-[url("../images/polaroidframe.png")] relative justify-self-center h-48 w-48 xl:h-96 xl:w-96 bg-cover bg-no-repeat bg-center'
              >
                <img
                  src={city.imagen}
                  alt={`Imagen ${i + 1}`}
                  className="object-cover h-[92%] p-7 xl:p-14"
                />
                <p className="relative max-xl:left-8 left-16 max-xl:bottom-6 bottom-12 max-xl:text-sm text-3xl italic font-light">{city.nombre}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default IndexCarousel;




// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const IndexCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % 3);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((currentSlide + 2) % 3);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentSlide]);

//   const images = [
//     // Grupo 1
//     [
//       '../images/Barcelona.png',
//       '../images/CapeTown.png',
//       '../images/Copenhagen.png',
//       '../images/ElCairo.png',
//     ],
//     // Grupo 2
//     [
//       '../images/Istanbul.png',
//       '../images/Kyoto.png',
//       '../images/NewYork.png',
//       '../images/Paris.png',
//     ],
//     // Grupo 3
//     [
//       '../images/Prague.png',
//       '../images/Roma.png',
//       '../images/Sydney.png',
//       '../images/Venecia.png',
//     ],
//   ];

//   return (
//     <div className='w-full h-full relative pb-5'>
//       <img onClick={() => prevSlide()} className='z-10 cursor-pointer absolute w-8 h-8 rounded-full top-[50%] opacity-50 right-1' src="../images/arrow.png" alt="" />
//       <img onClick={() => nextSlide()} className='z-10 cursor-pointer absolute w-8 h-8 rounded-full top-[50%] opacity-50 left-1 rotate-180' src="../images/arrow.png" alt="" />
//       <Carousel
//         selectedItem={currentSlide}
//         onChange={setCurrentSlide}
//         showStatus={false}
//         showThumbs={false}
//         autoPlay={false}
//         infiniteLoop={true}
//         transitionTime={0}
//         showArrows={false}
//       >
//         {images.map((imageGroup, index) => (
//           <div key={index} className="grid grid-cols-2 grid-rows-2 gap-5 mt-2 w-full bg-slate-500 bg-opacity-50 min-h-[40vh]">
//             {imageGroup.map((image, i) => (
//               <div className='bg-[url("../images/polaroidframe.png")] relative justify-self-center h-48 w-48 xl:h-96 xl:w-96 bg-cover bg-no-repeat bg-center'>
//                 <img
//                     key={i}
//                     src={image}
//                     alt={`Imagen ${i + 1}`}
//                     className="object-cover h-[92%] p-7 xl:p-14"
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default IndexCarousel;