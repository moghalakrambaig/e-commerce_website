import MainCarousal from '../../components/home-carousal/MainCarousal'
import HomeSectionCarousal from '../../components/home-slider/HomeSectionCarousal';

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