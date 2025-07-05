import React from 'react'
import MainCarousal from '../../components/homecarousal/MainCarousal'
import HomeSectionCarousal from '../../components/homesectioncarousal/HomeSectionCarousal';

const HomePage = () => {
  return (
    <div>
      <MainCarousal />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousal />
        <HomeSectionCarousal />
      </div>
    </div>

  )
}

export default HomePage;