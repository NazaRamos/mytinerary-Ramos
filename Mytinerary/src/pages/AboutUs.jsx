import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full min-h-screen bg-slate-500 flex flex-col items-center justify-around gap-5 py-5 md:px-10'>
      <h1 className='text-3xl text-white italic'>About us</h1>
      <div className='w-full flex justify-around items-center'>
        <img className='w-48 h-48 max-md:hidden' src="../../images/mission.png" alt="" />
        <div className='w-4/5 min-h-48 md:min-h-60 md:w-3/5 text-center md:self-end bg-cyan-950 text-white italic border border-white rounded-md p-5 flex flex-col items-center gap-2'>
          <h2 className='text-xl'>Our mission</h2>
          <p>At Mytinerary, our mission is to inspire and simplify travel experiences. We believe that every journey should be an enriching adventure, filled with unforgettable moments and discoveries. By curating exceptional itineraries and providing valuable insights, we aim to empower travelers to create their perfect journeys effortlessly. Whether it's exploring hidden gems, immersing in local cultures, or embracing new perspectives, Mytinerary is dedicated to enhancing the joy of travel for everyone.</p>
        </div>
      </div>
      <div className='w-full flex justify-around items-center'>
        <div className='w-4/5 min-h-48 md:min-h-60 md:w-3/5 text-center md:self-start bg-cyan-950 text-white italic border border-white rounded-md p-5 flex flex-col items-center gap-2'>
          <h2 className='text-xl'>Our vision</h2>
          <p>Our vision at Mytinerary is to become the go-to platform for travelers seeking personalized and immersive adventures. We envision a world where travel is not just a destination but a transformative experience that broadens horizons and creates lasting memories. Through innovative technologies and a passionate community, we aspire to redefine the way people plan and embark on their journeys. Mytinerary's vision is to foster a global community of explorers who share a love for discovering the beauty and diversity of our world.</p>
        </div>
        <img className='w-48 h-48 max-md:hidden' src="../../images/vision.png" alt="" />
      </div>
    </div>
  )
}

export default AboutUs