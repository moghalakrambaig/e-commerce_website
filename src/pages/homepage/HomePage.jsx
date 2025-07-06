import MainCarousal from '../../components/home-carousal/MainCarousal'
import HomeSectionCarousal from '../../components/home-slider/HomeSectionCarousal';
import { nike_shoes } from '../../data/nike_shoes';

const HomePage = () => {
  return (
    <div>
      <MainCarousal />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousal data={nike_shoes} sectionName={"Men's Nike Shoes"}/>
        <HomeSectionCarousal data={nike_shoes} sectionName={"Men's Adidas Shoes"}/>
        <HomeSectionCarousal data={nike_shoes} sectionName={"Men's Puma Shoes"}/>
      </div>
    </div>

  )
}

export default HomePage;